import {Component} from '@angular/core';

export class Agent {
	id:number;
	name:string;
	uuid:number;
	weixin:string;
	tel:string;
}
@Component({
	selector:'my-agent',
	styleUrls:['./my-agent.component.css'],
	template:`
	<h2>{{title}}</h2>
	<div class=''>
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
export class MyAgentComponent {
	title = "我的代理";
	agents:Agent[]=[
      {id:1,name:'张三',uuid:123456,weixin:'zlhou',tel:'13798225061'},
      {id:1,name:'张',uuid:123456,weixin:'zlhou',tel:'13798225061'},
      {id:1,name:'张',uuid:123456,weixin:'zlhou',tel:'13798225061'},
	]
	
}
