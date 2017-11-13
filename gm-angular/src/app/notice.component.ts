import {Component,OnInit} from '@angular/core';
import {AgentService} from './agent.service';

@Component({
	selector:'notice',
	templateUrl:'./notice.component.html',
	styles:[`
		.add-notice{
			margin-bottom:1em;
		}
	`]
	})

export class NoticeComponent implements OnInit{
	title="公告管理";
	constructor(private agentService:AgentService){};
	notices=[];
	statsInfo=[];
	ngOnInit(): void {
    	this.getNotices();
	}
	getNotices(){
		this.agentService.getNotices().then(
      	data=>{
      		console.log(data);
      		this.statsInfo=data;
      		this.bindpage(1);
      	})
	}

	 pageIndex = 1;
	  pageCount = 1;
	  totalNum = 0;
	  private bindpage(event:number):void {
	    this.notices = this.statsInfo.slice((event-1)*10,event*10);
	    this.pageIndex = event;
	    this.totalNum = this.statsInfo.length;
	    if(this.statsInfo.length%10==0){
	      this.pageCount = Math.floor(this.statsInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(this.statsInfo.length/10)+1;
	    }
	  }
}