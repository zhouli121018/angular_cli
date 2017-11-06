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
          items: [
          	{
          		title:"下级菜单",
          		items:[
          		{
          name: '2.1.1',
          title: '下级菜单1',
          items: []
        },
         {
          name: '3.1.1',
          title: '下级菜单2',
          items: []
        }]
          }
          ]
        }
      ]
    }, {
      title: '1.2',
      items:[
      	 {
          name: '2.1.1',
          title: 'xxx',
          items: []
        },
         {
          name: '3.1.1',
          title: 'xxx',
          items: []
        }
      ]
    }
    ]
  }];
	ngOnInit(): void {
	    this.getAgents();
	}
	
}
