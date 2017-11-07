import {Component} from '@angular/core';
import {AgentService} from './agent.service';
import {Vip} from './vip';
import { OnInit } from '@angular/core';
@Component({
	selector:'my-vip',
	styles:[],
	templateUrl:'./my-vip.component.html'
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
