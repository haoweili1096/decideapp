import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() { }

  ngOnInit(): void {
  }

}
