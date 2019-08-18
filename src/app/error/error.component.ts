import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfirmationDialogService } from '../service/confirmation-dialog.service';
import {Sort} from '@angular/material/sort';

export interface Test {
  date: Date;
  income: number;
  expense: number;
  comment: string;
  typeOfExpense: string;
  typeOfIncome: string;
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
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
sortedData: Test[];
  constructor(private confirmationDialogService: ConfirmationDialogService) {
    this.sortedData = this.test.slice();
   }

  ngOnInit() {
  }
  sortData(sort: Sort) {
    const data = this.test.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'typeOfIncome': return compare(a.typeOfIncome, b.typeOfIncome, isAsc);
        // case 'calories': return compare(a.calories, b.calories, isAsc);
        // case 'fat': return compare(a.fat, b.fat, isAsc);
        // case 'carbs': return compare(a.carbs, b.carbs, isAsc);
        // case 'protein': return compare(a.protein, b.protein, isAsc);
        default: return 0;
      }
    });
  }
  test: Test[] = [{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'abtype of exp',
    typeOfIncome: 'abincome',
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'bgtype of exp',
    typeOfIncome: 'bgincome',
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'sttype of exp',
    typeOfIncome: 'stincome',
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'dfincome',
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'rtincome',
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'fsincome',
  }
  ];
  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Confirm to delete', 'Do you really want to delete ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
