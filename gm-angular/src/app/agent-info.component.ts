import {Component} from '@angular/core';

@Component({
	selector:'agent-info',
	styleUrls:['./agent-info.component.css'],
	template:`
	<h2>
		<span>{{title}}</span>
		<img src="./assets/img/logo.png"/>
	</h2>
    <div>
    	<table class="table table-bordered table-responsive table-striped">
			<tr>
				<th>代理编号</th>
				<th>代理姓名</th>
				<th>代理微信</th>
			</tr>
			<tr>
				<td>fgssdfg</td>
				<td>dgdagda</td>
				<td>dsfadsf</td>
			</tr>
		</table>
    </div>
	`
})

export class AgentInfoComponent {
	title = "代理信息"
}
