import 'rxjs/Rx'

import { Injectable }             from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Bot } from './bot'

import { User } from '../api/user'
import { Update } from '../api/update'
import { Response } from '../api/response'

const KEY = 'bots'
const API = 'https://api.telegram.org/bot'

@Injectable()
export class BotService {
    private bots: Bot[]

    constructor(private http: HttpClient) {
        this.load()
        this.save()
    }

    load() {
        const data = localStorage.getItem(KEY)
        this.bots = JSON.parse(data) as Bot[] || []
    }

    save() {
        localStorage.setItem(KEY, JSON.stringify(this.bots))
    }

    get(): Bot[] {
        return this.bots
    }

    find(id: number) {
        return this.bots.find(b => id === b.id)
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
        this.http
            .get<Response<User>>(`${API}${token}/getMe`)
            .subscribe(
                res => this.add({ token, ...(res.result as Bot) }),
                err => alert(err.message))
    }

    async getMessages(bot: Bot, offset?: number): Promise<Update[]> {
        const params = offset ? `?offset=${offset}` : ''

        const res = await this.http
            .get<Response<Update[]>>(`${API}${bot.token}/getUpdates${params}`)
            .toPromise()

        const updates = res.result
        if (!updates.length) return []
        
        const next = updates[updates.length - 1].update_id + 1
        return updates.concat(await this.getMessages(bot, next))
    }
}