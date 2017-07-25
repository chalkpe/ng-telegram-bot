import 'rxjs/add/operator/switchMap'

import { Component, OnInit }                from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { Bot }        from '../bot'
import { BotService } from '../bot.service'

import { Message } from '../../api/message'

@Component({
    templateUrl: 'bot-inbox.component.html'
})
export class BotInboxComponent implements OnInit {
    bot: Bot
    messages: Message[] = null

    constructor(
        private service: BotService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        const botFinder = async params => this.service.find(params.get('token'))

        const botCallback = async (bot: Bot) => {
            if (!bot) return this.router.navigate(['/bots'])
            
            this.bot = bot
            this.getMessages()
        }

        this.route.paramMap
            .switchMap(botFinder)
            .subscribe(botCallback)
    }

    async getMessages() {
        this.messages = null
        const updates = await this.bot.getFullUpdates()

        this.messages = updates
            .filter(update => update.message && update.message.text)
            .map(update => update.message)
    }
}