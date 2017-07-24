import 'rxjs/add/operator/switchMap'

import { Component, OnInit }                from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { Bot } from '../bot'
import { BotService } from '../bot.service'

@Component({
    templateUrl: 'bot-inbox.component.html'
})
export class BotInboxComponent implements OnInit {
    bot: Bot
    constructor(
        private service: BotService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.service.find(+params.get('id')))
            .subscribe((bot: Bot) => this.bot = bot)
    }
}