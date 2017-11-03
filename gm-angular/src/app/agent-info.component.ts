import {Component} from '@angular/core';

@Component({
	selector:'agent-info',
	template:`<h2>{{title}}</h2>`
})

export class AgentInfoComponent {
	title = "代理信息"
}
