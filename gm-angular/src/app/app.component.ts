import { Component } from '@angular/core';
import {Link} from './link'
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
      <div id="title">
        <div class="log">
          <img src="./assets/img/logo.png" class="img-responsive"/>
          <p>珑擎管理后台</p>
        </div>
        <div>
          <button type="button" class="btn btn-danger">退出</button>
          <button type="button" class="btn btn-warning">修改密码</button>
        </div>
      </div>
      <div class="content">
      <nav id="nav" >
        <ul class="nav nav-pills nav-stacked">
          <li *ngFor="let level1 of level1s">
              <a [routerLink]="level1.link" (click)="toggleShow(level1)">{{level1.des}} <span *ngIf="level1.hasChild.length"  class="caret"></span></a>
              <ul *ngIf="level1.show">
                <li *ngFor="let item of level1.hasChild" ><a [routerLink]="item.link" 
                [class.active]="item === selectedUrl" (click)="onSelected(item)">{{item.des}}</a></li>
              </ul>
          </li>
        </ul>
      </nav>
      <div>
        <router-outlet></router-outlet>
      </div>
      </div>
      
   
  `
})
export class AppComponent {
  show1=false;
  show2=false;
  selectedUrl:Link;
  level1s:Link[]=[
    {
      link:'/agent-info',
      des:'代理信息',
      show:false,
      hasChild:[
          {link:'/agent-info',des:'代理信息代理信息',hasChild:[]},
          {link:'/my-agent',des:'我的代理我的代理我的代理',hasChild:[]},
          {link:'/my-vip',des:'我的会员',hasChild:[]}
          ]
    },
    {link:'/my-agent',des:'我的代理',show:false,hasChild:[]},
    {link:'/my-vip',des:'我的会员',show:false,hasChild:[
          {link:'/my-vip',des:'我的会员',hasChild:[]},
          {link:'/my-agent',des:'我的代理',hasChild:[]},
          {link:'/agent-info',des:'agent-info',hasChild:[]},
          {link:'/my-agent',des:'my-agent',hasChild:[]}
    ]},
    {link:'/my-agent',des:'我的代理',show:false,hasChild:[]},
    {link:'/my-agent',des:'投注信息',show:false,hasChild:[{link:'/my-vip',des:'投注详情',hasChild:[]}]}
  ]
  toggleShow(param):void{
    param.show=!param.show;
  }
  onSelected(item):void{
    this.selectedUrl = item;
  }
 
}
