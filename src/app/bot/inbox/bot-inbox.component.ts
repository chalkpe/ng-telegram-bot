import 'rxjs/add/operator/switchMap'

import { Component, OnInit, OnDestroy }     from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { Bot }        from '../bot'
import { BotService } from '../bot.service'

import { Message } from '../../api/message'

@Component({
    templateUrl: 'bot-inbox.component.html'
})
export class BotInboxComponent implements OnInit, OnDestroy {
    bot: Bot
    messages: Message[] = null

    private timer

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
            this.timer = setInterval(() => this.getMessages(), 500)
        }

        this.route.paramMap
            .switchMap(botFinder)
            .subscribe(botCallback)

        
    }

    ngOnDestroy() {
        clearInterval(this.timer)
    }

    async getMessages() {
        const updates = await this.bot.getFullUpdates()
        const messages = updates
            .filter(update => update.message && update.message.text)
            .map(update => update.message)
        
        if (!this.messages) this.messages = []
        this.messages.splice(0, 0, ...messages.reverse())
    }
}