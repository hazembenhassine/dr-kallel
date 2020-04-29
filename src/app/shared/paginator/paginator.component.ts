import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'med-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() pageIndex: number;
  @Input() size: number;
  @Input() pageSize: number;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  pages: number[];

  constructor() { }

  ngOnInit() {
    this.pages = Array(Math.ceil(this.size / this.pageSize)).fill(0).map((x, i) => i);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.size) {
      this.pages = Array(Math.ceil(changes.size.currentValue / this.pageSize)).fill(0).map((x, i) => i);
    }
  }

  emitEvent() {
    const event = new PageEvent();
    event.pageSize = this.pageSize;
    event.pageIndex = this.pageIndex;
    this.page.emit(event);
  }

  setPageIndex(index: number) {
    if (this.pageIndex !== index) {
      this.pageIndex = index;
      this.emitEvent();
    }
  }

  incrementPageIndex() {
    this.pageIndex++;
    this.emitEvent();
  }

  decrementPageIndex() {
    this.pageIndex--;
    this.emitEvent();
  }
}
