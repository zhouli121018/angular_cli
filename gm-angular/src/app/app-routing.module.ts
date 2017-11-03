import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AgentInfoComponent} from './agent-info.component';
import {MyAgentComponent} from './my-agent.component';

const routes :Routes = [
	{path:'agent-info',component:AgentInfoComponent},
    {path:'my-agent',component:MyAgentComponent},
    {path:'',redirectTo:'/agent-info',pathMatch:'full'}
]

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
	})

export class AppRoutingModule{}
