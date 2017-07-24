import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Bot } from './bot'

import { GetMe } from '../api/get-me'
import { Response } from '../api/response'

@Injectable()
export class BotService {
    private key = 'bots'
    private bots: Bot[]

    constructor(private http: HttpClient) {
        this.load()
        this.save()
    }

    load() {
        const data = localStorage.getItem(this.key)
        this.bots = JSON.parse(data) as Bot[] || []
    }

    save() {
        localStorage.setItem(this.key, JSON.stringify(this.bots))
    }

    get(): Bot[] {
        return this.bots
    }

    find(id: number) {
        return Promise.resolve(this.bots.find(b => id === b.id))
    }

    indexOf(bot: Bot) {
        return this.bots.findIndex(b => b.id === bot.id)
    }

    add(bot: Bot) {
        const index = this.indexOf(bot)
        
        if (index < 0) this.bots.push(bot)
        else this.bots.splice(index, 1, bot)
        
        this.save()
    }

    remove(bot: Bot) {
        const index = this.indexOf(bot)
        if (index < 0) return

        this.bots.splice(index, 1)
        this.save()
    }

    register(token: string) {
        const base = `https://api.telegram.org/bot${token}`
        
        this.http
            .get<Response<GetMe>>(`${base}/getMe`)
            .subscribe(res => this.add({ token, ...res.result }), err => alert(err.message))
    }

    
}