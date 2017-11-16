import { Component,OnInit } from '@angular/core';
import {Link} from './link'
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl:'./app.component.html'
})
 // <ul class="nav nav-pills nav-stacked">
 //           <li *ngFor="let le of links" [class.active]="le===selectedUrl" (click)="onSelected(le)">
 //             <a [routerLink]="le.link">{{le.des}} <span *ngIf="le.hasChild.length" class="caret"></span> </a>
 //             <ul *ngIf="le.hasChild.length">
 //               <li *ngFor="let l of le.hasChild" [class.active]="l===selectedUrl" (click)="onSelected(l)">
 //                 <a [routerLink]="l.link" > {{l.des}} <span *ngIf="l.hasChild.length" class="caret"></span></a>
 //                 <ul *ngIf="l.hasChild.length">
 //                   <li *ngFor="let v of l.hasChild" [class.active]="v===selectedUrl" (click)="onSelected(v)">
 //                     <a [routerLink]="v.link">{{v.des}}</a>
 //                   </li>
 //                 </ul>
 //               </li>
 //             </ul> 
 //           </li>
 //        </ul>
export class AppComponent implements OnInit{
 
  selectedUrl:Link;
  isLogin=false;
  loginInfo={
    uname:"",
    psw:"",
    code:""
  };
  ngOnInit(): void {
      if(sessionStorage['login']==1){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
  }
  links=[
    {
      link:'/agent-info',
      des:'代理信息',
      hasChild:[
          {link:'/agent-info',des:'代理信息代理信息',hasChild:[]},
          {link:'/my-agent',des:'我的代理我的代理我的代理',hasChild:[]},
          {link:'/my-vip',des:'我的会员',hasChild:[
              {link:'/my-vip',des:'我的会员',hasChild:[]},
              {link:'/my-agent',des:'我的代理',hasChild:[]},
              {link:'/agent-info',des:'agent-info',hasChild:[]}
          ]} 
          ]
    },
    {link:'/my-agent',des:'我的代理',hasChild:[]},
    {link:'/my-vip',des:'我的会员',hasChild:[
          {link:'/my-vip',des:'我的会员',hasChild:[]},
          {link:'/my-agent',des:'我的代理',hasChild:[]},
          {link:'/agent-info',des:'agent-info',hasChild:[
              {link:'/my-vip',des:'我的会员',hasChild:[]},
              {link:'/my-agent',des:'我的代理',hasChild:[]},
              {link:'/agent-info',des:'agent-info',hasChild:[]}
          ]}
         
    ]},
    {link:'/details',des:'账单明细',hasChild:[]},
     {link:'/paylog',des:'提现流水',hasChild:[]},
     {link:'/stats',des:'投注统计',hasChild:[]},
     {link:'/touzhu-detail',des:'投注明细',hasChild:[]},
     {link:'/exchange',des:'兑换明细',hasChild:[]},
     {link:'/notice',des:'公告管理',hasChild:[]}
    
  ]
  toggleShow(param):void{
    param.show=!param.show;
  }
  onSelected(item):void{
    this.selectedUrl = item;
  }
  login():void{
    console.log(this.loginInfo.uname,this.loginInfo.psw);
    if(this.loginInfo.uname==""||this.loginInfo.psw==""||this.loginInfo.code==""){
      alert('账号、密码、验证码不能为空！');
      return;
    }else{
      this.isLogin=true;
      sessionStorage['login']=1;
    }
  }

  logout():void{
    this.isLogin=false;
    sessionStorage.clear();
  }
}
