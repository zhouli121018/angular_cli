import {Component} from '@angular/core';
import {AgentService} from './agent.service';
import {Vip} from './vip';
import { OnInit } from '@angular/core';
@Component({
	selector:'my-vip',
	styles:[`
      .searchInfo{
      	margin:1em 0;
      }
	`]
	template:`
      <h2>
      	<span>{{title}}</span>
		<img src="./assets/img/logo.png"/>
      </h2>
      <div>
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
				        <button class="btn btn-default" type="button">用 户 ID</button>
				      </span>
				      <input type="number" class="form-control" placeholder="用户ID">
				    </div>
				</div>
			  <div class="col-sm-3">
			        <button class="btn btn-success" type="button">查询</button>
			  </div>
			</div>
		</div>
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
      <app-paging [pageIndex]="this.pageIndex" [pageCount]="this.pageCount" (change)="bindpage($event)"></app-paging>
      <p class="total">共有 <b>{{totalNum}}</b> 条记录</p>
	`
	})
export class MyVipComponent implements OnInit{
	title = "我的会员";
    vips:Vip[];
    constructor(private agentService:AgentService){}
   
    ngOnInit(): void {
	    this.bindpage(1);
	}
	pageIndex = 1;
	pageCount = 1;
	totalNum = 0;
	bindpage(event:number):void {
		var vipsInfo = this.agentService.getVips();
		this.vips = vipsInfo.slice((event-1)*10,event*10);
		this.pageIndex = event;
		this.totalNum = vipsInfo.length;
		this.pageCount = Math.floor(vipsInfo.length/10)+1;
    
    }
}
