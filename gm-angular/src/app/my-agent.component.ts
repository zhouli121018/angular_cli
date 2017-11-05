import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Agent} from './agent';
import {AgentService} from './agent.service';

@Component({
	selector:'my-agent',
	styleUrls:['./my-agent.component.css'],
	template:`
	<h2>{{title}}</h2>
	<div class=''>
		<table class="table table-bordered table-responsive table-striped">
			<tr>
				<th>代理编号</th>
				<th>代理姓名</th>
				<th>代理微信</th>
			</tr>
			<tr *ngFor="let agent of agents">
				<td>{{agent.id}}</td>
				<td>{{agent.name}}</td>
				<td>{{agent.weixin}}</td>
			</tr>
		</table>
	</div>
	`
})
export class MyAgentComponent implements OnInit{
	title = "我的代理";
	agents:Agent[];
	constructor(private agentService:AgentService){}
    getAgents():void{
    	this.agents=this.agentService.getAgents();
    }
	ngOnInit(): void {
	    this.getAgents();
	}
	
}
