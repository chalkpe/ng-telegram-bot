import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BotListComponent } from './bot/list/bot-list.component'
import { BotInboxComponent } from './bot/inbox/bot-inbox.component'

const routes: Routes = [
    { path: 'bots', component: BotListComponent },
    { path: 'inbox/:token', component: BotInboxComponent },
    { path: '', redirectTo: '/bots', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}