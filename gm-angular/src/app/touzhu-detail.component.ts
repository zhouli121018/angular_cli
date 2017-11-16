import {Component,OnInit} from '@angular/core';
import {AgentService} from './agent.service';

@Component({
	selector:'touzhu-detail',
	templateUrl:'./touzhu-detail.component.html'
	})

export class TouzhuDetailComponent implements OnInit{
	title="投注明细";
	touzhudetails=[];
	statsInfo=[];
	constructor(private agentService:AgentService){};
    ngOnInit(): void {
    	this.getStats();
	}
	getStats(){
		this.agentService.getTouzhuDetails().then(
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
	    this.touzhudetails = this.statsInfo.slice((event-1)*10,event*10);
	    this.pageIndex = event;
	    this.totalNum = this.statsInfo.length;
	    if(this.statsInfo.length%10==0){
	      this.pageCount = Math.floor(this.statsInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(this.statsInfo.length/10)+1;
	    }
	  }
}