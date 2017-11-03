import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
    <h1>{{title}}</h1>
    <nav>
    	<a routerLink="/agent-info">agent-info</a>
    	<a routerLink="/my-agent">my-agent</a>
    </nav>
  	<router-outlet><router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
