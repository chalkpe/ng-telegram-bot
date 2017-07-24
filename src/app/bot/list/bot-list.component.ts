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

    ngOnInit() {
        this.bots = this.service.get()
    }

    show(bot: Bot) {
        alert(bot.token)
    }

    open(bot: Bot) {
        this.router.navigate(['/inbox', bot.id])
    }

    remove(bot: Bot){
        this.service.remove(bot)
    }

    register() {
        if (!this.token) {
            alert('Enter bot token first')
            return
        }

        this.service.register(this.token)
        this.token = ''
    }
}