import { Component, OnInit } from '@angular/core'
import { Router }            from '@angular/router'

import { Bot } from '../bot'
import { BotService } from '../bot.service'

@Component({
    templateUrl: 'bot-list.component.html'
})
export class BotListComponent implements OnInit {
    bots: Bot[]
    token: string

    constructor(
        private service: BotService,
        private router: Router
    ) {}

    async ngOnInit() {
        await this.service.load()
        this.bots = this.service.get()
    }

    show(bot: Bot) {
        alert(bot.token)
    }

    open(bot: Bot) {
        this.router.navigate(['/inbox', bot.token])
    }

    remove(bot: Bot){
        if (confirm(`Are you sure you want to remove @${bot.username}?`)) this.service.remove(bot)
    }

    register() {
        if (!this.token) return alert('Enter bot token first')

        this.service.register(this.token)
        this.token = ''
    }
}