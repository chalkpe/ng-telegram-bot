import { HttpClient } from '@angular/common/http'

import { User }     from '../api/user'
import { Update }   from '../api/update'
import { Response } from '../api/response'

export class Bot extends User {
    readonly base: string

    private constructor(public token: string, private http: HttpClient) {
        super()
        this.base = `https://api.telegram.org/bot${this.token}`
    }

    static async create(token: string, http: HttpClient) {
        const bot = new Bot(token, http)
        Object.assign(bot, await bot.getMe())

        return bot
    }

    createURI(method: string, paramMap?: object): string {
        const path = this.base + '/' + method
        const params = Object.keys(paramMap || {})
            .filter(key => typeof params[key] === 'string' && params[key].length)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))

        return params.length === 0 ? path : (path + '?' + params.join('&'))
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
        const updates = await this.getUpdates()
        if (!updates.length) return []
        
        const next = updates[updates.length - 1].update_id + 1
        return updates.concat(await this.getUpdates(next))
    }
}