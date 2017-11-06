import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
 
@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html'
})
export class PagingComponent implements OnInit {
 
  constructor() { }
 
  @Input() pageIndex: number = 1;
  @Input() pageCount: number = 3;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
 
  ngOnInit() {
  }
 
  moveToFirstPage() {
    this.change.emit(1);
  }
 
  moveToPreviousPage() {
    this.change.emit(this.pageIndex - 1);
  }
 
  moveToNextPage(){
    this.change.emit(this.pageIndex + 1);
  }
 
  moveToLastPage() {
    this.change.emit(this.pageCount);
  }
 
}