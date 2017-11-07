import {Component,OnInit} from '@angular/core';
import {Paylog} from './paylog';
import {AgentService} from './agent.service';

@Component({
	selector:'paylog',
	templateUrl:'./paylog.component.html'
	})

export class PaylogComponent implements OnInit{
	title="提现流水";
	paylogs:Paylog[];
	constructor(private agentService:AgentService){}
	ngOnInit(): void {
	    this.bindpage(1);
	    console.dir(this.paylogs)
	}
	  pageIndex = 1;
	  pageCount = 1;
	  totalNum = 0;
	  private bindpage(event:number):void {
	    var paylogInfo = this.agentService.getPaylogs();
	    this.paylogs = paylogInfo.slice((event-1)*10,event*10);
	    this.pageIndex = event;
	    this.totalNum = paylogInfo.length;
	    if(paylogInfo.length%10==0){
	      this.pageCount = Math.floor(paylogInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(paylogInfo.length/10)+1;
	    }
	  }

}