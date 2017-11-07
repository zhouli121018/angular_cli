import {Component,OnInit} from '@angular/core';
import {Detail} from './detail';
import {AgentService} from './agent.service';

@Component({
	selector:'app-details',
	templateUrl:'./details.component.html'
	})

export class DetailsComponent implements OnInit{
	title="账单明细";
	details:Detail[];
	constructor(private agentService:AgentService){}
	ngOnInit(): void {
	    this.bindpage(1);
	}
	  pageIndex = 1;
	  pageCount = 1;
	  totalNum = 0;
	  private bindpage(event:number):void {
	    var detailInfo = this.agentService.getDetails();
	    this.details = detailInfo.slice((event-1)*10,event*10);
	    this.pageIndex = event;
	    this.totalNum = detailInfo.length;
	    if(detailInfo.length%10==0){
	      this.pageCount = Math.floor(detailInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(detailInfo.length/10)+1;
	    }
	  }

}