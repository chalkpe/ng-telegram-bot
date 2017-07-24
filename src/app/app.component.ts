import { Component, OnInit } from '@angular/core'
import { BotService } from './bot/bot.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private botService: BotService) {}
  
  ngOnInit() {
    
  }
}
