import { HttpClient } from '@angular/common/http'

import { User }     from '../api/user'
import { Update }   from '../api/update'
import { Message } from '../api/message'
import { Response } from '../api/response'

export class Bot extends User {
    readonly base: string
    
    updates: Update[] = []
    messages: Message[] = []

    private constructor(public token: string, private http: HttpClient) {
        super()
        this.base = `https://api.telegram.org/bot${this.token}`
    }

    static async create(token: string, http: HttpClient) {
        const bot = new Bot(token, http)
        Object.assign(bot, await bot.getMe())

        return bot
    }

    createURI(method: string, params?: object): string {
        const path = this.base + '/' + method
        const paramStrings = Object.keys(params || {})
            .filter(key => params[key])
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))

        return paramStrings.length === 0 ? path : (path + '?' + paramStrings.join('&'))
    }

    async fetchResponse<T>(method: string, paramMap?: object): Promise<T> {
        const uri = this.createURI(method, paramMap)
        const res = await this.http.get<Response<T>>(uri).toPromise()

        if (res.ok) return res.result
        throw new Error(res.error_code + ' ' + res.description)
    }

    async getMe() {
        return this.fetchResponse<User>('getMe')
    }

    async getUpdates(offset?: number) {
        return this.fetchResponse<Update[]>('getUpdates', { offset })
    }

    async getFullUpdates() {
        let next = 0
        const fullUpdates = []
        
        while (true) {
            const updates = await this.getUpdates(next)
            if (!updates.length) break 

            fullUpdates.push(...updates)
            next = updates[updates.length - 1].update_id + 1
        }

        this.updates.push(...fullUpdates)
        this.messages.push(...fullUpdates
            .filter(update => update.message)
            .map(update => update.message as Message))

        return fullUpdates
    }
}