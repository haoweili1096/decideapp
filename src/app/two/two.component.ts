import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppValues, Errors } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input() appValues: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  constructor() { }

  getResults() {
    const appValuesCopy = this.appValues;

    appValuesCopy.visbilePanel = 'three';
    this.next.emit(appValuesCopy);
  }

  ngOnInit(): void {
  }

}
