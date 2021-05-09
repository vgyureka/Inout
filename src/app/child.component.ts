import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['PData'],
  // tslint:disable-next-line:no-outputs-metadata-property
  outputs: ['childEvent']
})
export class ChildComponent implements OnInit {
  PData: any;
  childEvent = new EventEmitter();
  constructor() {}
  // tslint:disable-next-line:typedef
  ngOnInit() {}
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.childEvent.emit(value);
  }
}
