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
    	<p class="agent-info-tips">代理须知：各位提款时候如果发生报错信息，请先检查可提现金额是否超过100。如是其他错误，请稍后再次尝试或联系上级代理。</p>
    	<div class="basic-info">
    		<p class="text-center">我的基本信息</p>
    		<div>
                <table class="table table-bordered table-responsive table-striped">
					<tr>
						<td>游戏账号ID:</td>
						<td>135818</td>
						<td>游戏账号昵称:</td>
						<td>昵称</td>
						<td>代理姓名:</td>
						<td>admin</td>
					</tr>
					<tr>
						<td>手机号:</td>
						<td>13515485818</td>
						<td>微信:</td>
						<td>safsdf</td>
						<td>钻石:</td>
						<td>220</td>
					</tr>
					<tr>
						<td>邀请码:</td>
						<td>13515485818</td>
						<td>代理级别:</td>
						<td>皇冠代理</td>
						<td>上级代理邀请码:</td>
						<td>2200</td>
					</tr>
					<tr>
						<td>代理状态:</td>
						<td>正常</td>
						<td>操作:</td>
						<td><a href="#">修改密码</a></td>
						<td></td>
						<td></td>
					</tr>
				</table>
    		</div>
    	</div>

    	<div class="money-info">
    		<p class="text-center">金额信息</p>
    		<div>
                <table class="table table-bordered table-responsive table-striped">
					<tr>
						<td>可以金额:</td>
						<td>1256.23</td>
						<td>累计收益:</td>
						<td></td>
					</tr>
					<tr>
						<td>下属用户收益:</td>
						<td>￥106(70.0%)</td>
						<td>下属代理收益:</td>
						<td>￥6055.0</td>
					</tr>
					<tr>
						<td>下属用户投注收益:</td>
						<td>￥144749</td>
						<td>下属代理投注收益:</td>
						<td>￥13555</td>
					</tr>
					<tr>
						<td>下级代理数量:</td>
						<td>51</td>
						<td>下级会员数量:</td>
						<td>395</td>
					</tr>
					<tr>
						<td>转账金额:</td>
						<td colspan="3">
							<div class="input-group">
							  <input type="text" class="form-control">
							  <div class="input-group-btn">
							     <input type="button" class="btn btn-primary" value="提现">
							     <input type="button" class="btn btn-primary" value="刷新">
							  </div>
							</div>
						</td>
					</tr>
				</table>
    		</div>
    	</div>
    	
    </div>
	`
})

export class AgentInfoComponent {
	title = "代理信息";
	
}
