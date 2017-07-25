import 'rxjs/Rx'

import { NgModule }         from '@angular/core'
import { BrowserModule }    from '@angular/platform-browser'
import { FormsModule }      from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { BotService } from './bot/bot.service'
import { BotListComponent } from './bot/list/bot-list.component'
import { BotInboxComponent } from './bot/inbox/bot-inbox.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  declarations: [
    AppComponent,
    BotListComponent,
    BotInboxComponent
  ],

  providers: [BotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
