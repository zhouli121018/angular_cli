import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AgentService} from './agent.service';

import { AppComponent } from './app.component';
import { AgentInfoComponent } from './agent-info.component';
import {MyAgentComponent} from './my-agent.component';
import {MyVipComponent} from './my-vip.component';
import {PagingComponent} from './paging.component';
// import {TreeComponent} from './tree.component';
import {Agent} from './agent';

import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AgentInfoComponent,
    MyAgentComponent,
    MyVipComponent,
    PagingComponent,
    // TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
