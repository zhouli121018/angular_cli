import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Agent} from './agent';
import {AgentService} from './agent.service';

@Component({
	selector:'my-agent',
	styleUrls:['./my-agent.component.css'],
	template:`
	<h2>
	    <span>{{title}}</span>
		<img src="./assets/img/logo.png"/>
	</h2>
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
    };
    menu = [{
    title: '1',
    _open:true, //默认打开第一级
    items: [{
      title: '1.1',
      items: [
        {
          name: '1.1.1',
          title: 'xxx',
          items: []
        }
      ]
    }, {
      title: '1.2',
      items:[]
    }
    ]
  }];
	ngOnInit(): void {
	    this.getAgents();
	}
	
}
