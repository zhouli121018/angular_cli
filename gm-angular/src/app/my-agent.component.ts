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
    <div class="searchInfo">
          <div class="row">
        <div class="col-sm-3">
          <div class="input-group">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">起始时间</button>
            </span>
            <input type="date" class="form-control" placeholder="选择日期">
          </div>
        </div>
        <div class="col-sm-3">
          <div class="input-group">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">结束时间</button>
            </span>
            <input type="date" class="form-control" placeholder="选择日期">
          </div>
        </div>
            <div class="col-sm-3">
            <div class="input-group">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">代理邀请码</button>
              </span>
              <input type="number" class="form-control" placeholder="代理邀请码">
            </div>
        </div>
        <div class="col-sm-3">
              <button class="btn btn-success" type="button">查询</button>
        </div>
      </div>
    </div>
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
  <app-echarts ></app-echarts>
	`
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
