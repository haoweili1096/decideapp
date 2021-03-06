import { Component, OnInit } from '@angular/core';
import answersValue from './utils/answers.json';

export interface AppValues{
  visbilePanel: string;
  question: string;
  mode: boolean;
  answers: string[];
  custom: string[];
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appValues: AppValues = {
    visbilePanel: 'one', // which component to show
    question: '',
    mode: false,
    answers: answersValue.answers,
    custom: [],
    answer: null
  };

  handleNext(values: AppValues) {
    this.appValues = values;
  }

  ngOnInit() {
  }
}
