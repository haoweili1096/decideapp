import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppValues } from '../app.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @Input() appValues: AppValues;
  @Output() next = new EventEmitter<AppValues>();
  @Output() hasErrors = new EventEmitter<any>();

  constructor() { }

  onAddQuestion(question: HTMLInputElement) {
    const appValuesCopy = this.appValues;
    if(question.value !== '') {
      appValuesCopy.visbilePanel = 'two';
      appValuesCopy.question = question.value;
      
      this.next.emit(appValuesCopy);
    }
    else {
      //show errors
      this.hasErrors.emit({
        show: true,
        message: 'Sorry, you need to enter something.'
      })
    }
  }

  ngOnInit(): void {
  }

}
