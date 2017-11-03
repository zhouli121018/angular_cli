import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgentInfoComponent } from './agent-info.component';
import {MyAgentComponent} from './my-agent.component';
import {MyVipComponent} from './my-vip.component'
import {Agent} from './agent';

import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AgentInfoComponent,
    MyAgentComponent,
    MyVipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
