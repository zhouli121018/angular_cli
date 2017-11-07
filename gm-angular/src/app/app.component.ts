import { Component } from '@angular/core';
import {Link} from './link'
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
      <div id="title">
        <div class="log">
          <img src="./assets/img/admin.png" class="img-responsive"/>
          <p>欢迎 admin 的到来！</p>
        </div>
        <div>
          <button type="button" class="btn btn-danger">退出</button>
          <button type="button" class="btn btn-warning">修改密码</button>
        </div>
      </div>
      <div class="content">
      <nav id="nav" >
          <app-nav [treelists]="links" class="navtree"></app-nav>
      </nav>
      <div>
        <router-outlet></router-outlet>
      </div>
      </div>
      
   
  `
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
export class AppComponent {
 
  selectedUrl:Link;
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
    {link:'/details',des:'账单明细',hasChild:[]},
     {link:'/paylog',des:'提现流水',hasChild:[]},
    {link:'/my-vip',des:'我的会员',hasChild:[
          {link:'/my-vip',des:'我的会员',hasChild:[]},
          {link:'/my-agent',des:'我的代理',hasChild:[]},
          {link:'/agent-info',des:'agent-info',hasChild:[
              {link:'/my-vip',des:'我的会员',hasChild:[]},
              {link:'/my-agent',des:'我的代理',hasChild:[]},
              {link:'/agent-info',des:'agent-info',hasChild:[]}
          ]}
         
    ]},
    {link:'/my-echarts',des:'图表统计',hasChild:[]},
    {link:'/my-agent',des:'我的代理',hasChild:[]},
    {link:'/my-agent',des:'投注信息',hasChild:[{link:'/my-vip',des:'投注详情',hasChild:[]}]}
  ]
  toggleShow(param):void{
    param.show=!param.show;
  }
  onSelected(item):void{
    this.selectedUrl = item;
  }
 
}
