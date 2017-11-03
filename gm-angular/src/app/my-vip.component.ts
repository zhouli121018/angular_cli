import {Component} from '@angular/core';
import {AgentService} from './agent.service';
import {Vip} from './vip';
import { OnInit } from '@angular/core';
@Component({
	selector:'my-vip',
	template:`
      <h2>{{title}}</h2>
      <div>
      	<table class="table table-bordered table-responsive table-striped">
			<tr>
				<th>用户ID</th>
				<th>用户昵称</th>
				<th>剩余红钻</th>
				<th>剩余房卡</th>
				<th>创建时间</th>
			</tr>
			<tbody *ngIf="vips">
				<tr *ngFor="let vip of vips">
					<td>{{vip.uuid}}</td>
					<td>{{vip.nickname}}</td>
					<td>{{vip.redcard}}</td>
					<td>{{vip.roomcard}}</td>
					<td>{{vip.createtime}}</td>
				</tr>
			</tbody>
		</table>
      </div>
	`
	})
export class MyVipComponent implements OnInit{
	title = "我的会员";
    vips:Vip[];
    constructor(private agentService:AgentService){}
    getVips():void {
    	this.vips = this.agentService.getVips();
    }
    ngOnInit(): void {
	    this.getVips();
	}
}
