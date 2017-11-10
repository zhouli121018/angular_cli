import {Component,OnInit} from '@angular/core';
import {AgentService} from './agent.service';
import {Vip} from './vip';

@Component({
	selector:'exchange',
	styles:[],
	templateUrl:'./exchange.component.html'
	})

export class ExchangeComponent implements OnInit{
	title="兑换明细";
	exchanges=[];
	statsInfo=[];
	constructor(private agentService:AgentService){};
    ngOnInit(): void {
    	this.getExchanges();
	}
	getExchanges(){
		this.agentService.getExchanges().then(
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
	    this.exchanges = this.statsInfo.slice((event-1)*10,event*10);
	    this.pageIndex = event;
	    this.totalNum = this.statsInfo.length;
	    if(this.statsInfo.length%10==0){
	      this.pageCount = Math.floor(this.statsInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(this.statsInfo.length/10)+1;
	    }
	  }
}