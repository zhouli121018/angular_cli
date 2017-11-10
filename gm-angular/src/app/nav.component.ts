import { Component, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls:['./nav.component.css']
})
export class NavComponent {

  // 超简单, 重点: 接收上级的值
  // 可以为树建立一个接口, 这里简化为any
  @Input() treelists: any;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  selectedItem;
  // 点击动作
  itemClick(i) {
    // 建立一个服务来接收这个值, 或者借助双向绑定, 处理动作
    i._open = !i._open;  // 本例只简单演示开关, 借助 treelists本身实现
    this.selectedItem = i;
    //console.log(i)
  }
}