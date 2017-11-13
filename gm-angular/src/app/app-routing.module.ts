import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AgentInfoComponent} from './agent-info.component';
import {MyAgentComponent} from './my-agent.component';
import {MyVipComponent} from './my-vip.component';
import {EchartsComponent} from './echarts.component';
import {DetailsComponent} from './details.component';
import {PaylogComponent} from './paylog.component';
import {StatsComponent} from './stats.component';
import {TouzhuDetailComponent} from './touzhu-detail.component';
import {ExchangeComponent} from './exchange.component';
import {NoticeComponent} from './notice.component';

const routes :Routes = [
	{path:'agent-info',component:AgentInfoComponent},
    {path:'my-agent',component:MyAgentComponent},
    {path:'my-vip',component:MyVipComponent},
    {path:'my-echarts',component:EchartsComponent},
    {path:'details',component:DetailsComponent},
    {path:'paylog',component:PaylogComponent},
    {path:'stats',component:StatsComponent},
    {path:'touzhu-detail',component:TouzhuDetailComponent},
    {path:'exchange',component:ExchangeComponent},
    {path:'notice',component:NoticeComponent},
    {path:'',redirectTo:'/agent-info',pathMatch:'full'}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
	})

export class AppRoutingModule{}
