import {Component,OnInit} from '@angular/core';
import {AgentService} from './agent.service';
import * as $ from 'jquery';

@Component({
	selector:'login',
	templateUrl:'./login.component.html'
	})

export class LoginComponent implements OnInit{
	title="登录";
	constructor(private agentService:AgentService){}
	ngOnInit(): void {
	    $(function(){
	    	console.log(111);
	    	})
	}
}