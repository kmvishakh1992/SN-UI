import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {
id: number =1;
countryForm: FormGroup;
expenseType = ['Expense', 'Income']
  constructor() { }

  ngOnInit() {
  }
  test = [{
    date: Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'type of income',
  },{
    date: Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'type of income',
  },{
    date: Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'type of income',
  },{
    date: Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'type of income',
  },{
    date: Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'type of income',
  },{
    date: Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'type of income',
  }
  ];
}
