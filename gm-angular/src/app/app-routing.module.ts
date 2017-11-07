import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AgentInfoComponent} from './agent-info.component';
import {MyAgentComponent} from './my-agent.component';
import {MyVipComponent} from './my-vip.component';
import {EchartsComponent} from './echarts.component'

const routes :Routes = [
	{path:'agent-info',component:AgentInfoComponent},
    {path:'my-agent',component:MyAgentComponent},
    {path:'my-vip',component:MyVipComponent},
    {path:'my-echarts',component:EchartsComponent},
    {path:'',redirectTo:'/agent-info',pathMatch:'full'}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
	})

export class AppRoutingModule{}
