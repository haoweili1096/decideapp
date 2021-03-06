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

export interface Errors{
  show: boolean;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  errors: Errors = {
    show: false,
    message: null
  };
  
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

  handleErrors(values: Errors) {
    const errorsCopy = this.errors;

    this.errors = {
      show: values.show,
      message: values.message
    }
    setTimeout(() => {
      this.errors = errorsCopy;
    }, 2000);
  }

  handleReset() {
    let appValuesCopy = this.appValues;
    appValuesCopy = {
      ...appValuesCopy,
      visbilePanel: 'one',
    question: '',
    mode: false,
    custom: [],
    answer: null
    }
    this.appValues = appValuesCopy;
  }

  ngOnInit() {
  }
}
