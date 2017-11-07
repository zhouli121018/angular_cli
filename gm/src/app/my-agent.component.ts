import {Component} from '@angular/core';

@Component({
	selector:'my-agent',
	template:`<h2>{{title}}</h2>
	<table>
		<thead>
			<tr>
				<th>姓名</th>
				<th>微信</th>
				<th>游戏ID</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>张扬</td>
				<td>zhouli08182648</td>
				<td>137818</td>
			</tr>
			<tr>
				<td>麦宜</td>
				<td>ehwf</td>
				<td>138509</td>
			</tr>
			<tr>
				<td>白水</td>
				<td>sdfdsf</td>
				<td>125869</td>
			</tr>
		</tbody>
	</table>
	`
})

export class MyAgentComponent {
	title = "我的代理"
}
