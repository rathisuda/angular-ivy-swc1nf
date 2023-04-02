import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  @Input() title: string;
  @Input() products: string[];
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}
  addItemEvent(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() {}
}
