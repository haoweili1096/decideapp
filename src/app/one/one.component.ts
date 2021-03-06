import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Input() appValues: AppValues;

  constructor() { }

  ngOnInit(): void {
  }

}
