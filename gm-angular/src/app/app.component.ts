import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
   
      <h1>{{title}}</h1>
      <div class="content">
      <nav id="nav" >
        <ul class="nav nav-pills nav-stacked">
          <li *ngFor="let level1 of level1s">
              <a [routerLink]="level1.link" (click)="toggleShow(level1)">{{level1.des}} <span *ngIf="level1.hasChild.length"  class="caret"></span></a>
              <ul *ngIf="level1.show">
                <li *ngFor="let item of level1.hasChild"><a [routerLink]="item.link">{{item.des}}</a></li>
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
  title = 'app';
  show1=false;
  show2=false;
  level1s=[
    {
      link:'/a',
      des:'代理信息',
      show:true,
      hasChild:[
          {link:'/agent-info',des:'agent-info',hasChild:[]},
          {link:'/my-agent',des:'my-agentfdggggggggggggg',hasChild:[]},
          {link:'/agent-info',des:'agent-info',hasChild:[]},
          {link:'/my-agent',des:'my-agent',hasChild:[]}
          ]
    },
    {link:'/my-agent',des:'我的代理',show:false,hasChild:[]},
    {link:'/b',des:'我的会员',show:false,hasChild:[
          {link:'/my-vip',des:'我的会员',hasChild:[]},
          {link:'/my-agent',des:'我的代理',hasChild:[]},
          {link:'/agent-info',des:'agent-info',hasChild:[]},
          {link:'/my-agent',des:'my-agent',hasChild:[]}
    ]},
    {link:'/my-agent',des:'我的代理',show:false,hasChild:[]}
  ]
  toggleShow(param):void{
    param.show=!param.show;
  }
 
}
