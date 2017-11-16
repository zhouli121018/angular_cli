import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

$('#log').click(function(){
	if($('#uname').val()==""||$('#psw').val()==""){
		alert('账号密码不能为空！');
		return;
	}else{
		sessionStorage['loginUser']=1;
		$('#login').hide().siblings().show();
		//location.href="agent-info";
	}
})
$('#logout').on('click',function(){
	sessionStorage.clear();
	$('#login').show().siblings().hide();
})
if(sessionStorage['loginUser']){
	$('#login').hide().siblings().show();
}else{
	$('#login').show().siblings().hide();
}