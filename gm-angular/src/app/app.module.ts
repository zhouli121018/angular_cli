import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {AgentService} from './agent.service';

import { AppComponent } from './app.component';
import { AgentInfoComponent } from './agent-info.component';
import {MyAgentComponent} from './my-agent.component';
import {MyVipComponent} from './my-vip.component';
import {PagingComponent} from './paging.component';
import {TreeComponent} from './tree.component';
import {NavComponent} from './nav.component';
import {Agent} from './agent';
import {EchartsComponent} from './echarts.component';
import {DetailsComponent} from './details.component';
import {PaylogComponent} from './paylog.component';

import {AppRoutingModule} from './app-routing.module';
import {EchartsModule} from './echarts.module';
@NgModule({
  declarations: [
    AppComponent,
    AgentInfoComponent,
    MyAgentComponent,
    MyVipComponent,
    PagingComponent,
    TreeComponent,
    NavComponent,
    DetailsComponent,
    PaylogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EchartsModule
  ],
  providers:[AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
