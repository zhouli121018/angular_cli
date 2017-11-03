import {Component} from '@angular/core';

@Component({
	selector:'my-vip',
	template:`
      <h2>{{title}}</h2>
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
export class MyVipComponent {
	title = "我的会员";

}
