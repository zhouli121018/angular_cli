import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Agent} from './agent';
import {AgentService} from './agent.service';


@Component({
	selector:'my-agent',
	styleUrls:['./my-agent.component.css'],
	templateUrl:'./my-agent.component.html'
})
export class MyAgentComponent implements OnInit{
	title = "我的代理";
	agents:Agent[];
	constructor(private agentService:AgentService){}
    getAgents():void{
    	this.agents=this.agentService.getAgents();
    };
    
	ngOnInit(): void {
	    this.getAgents();
	}
  datas={link_title:"本周新增会员数量",x_data:[21231,1212,21231,3213,2222,6666,7777],
  y_data:[212,121,212,321,333,555,888};
	bar(event:any){
    console.log(event);
  }
}
