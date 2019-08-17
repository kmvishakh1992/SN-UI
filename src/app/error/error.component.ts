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
incomeExpenseValue:  any ='Expense';
expenseValue: string = 'Raw material';
incomeValue: string = 'inc1';
paidBy: string= 'testUser1';
receivedBy: string = 'testUser1';
userList = ['testUser1','testUser2'];
incomeExpenseType = ['Expense', 'Income'];
expenseType= ['Raw material','Tea','Transportation','Electricity','Others'];
incomeType=['inc1','inc2','inc3','others'];
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
