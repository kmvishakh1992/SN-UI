import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfirmationDialogService } from '../service/confirmation-dialog.service';
import {Sort} from '@angular/material/sort';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';

export interface Test {
  date: Date;
  income: number;
  expense: number;
  comment: string;
  typeOfExpense: string;
  typeOfIncome: string;
  receivedBy: string;
  paidBy: string;
  receivedFor:string;
  paidFor:string;
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
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
  constructor(private dialog: MatDialog,private confirmationDialogService: ConfirmationDialogService) {
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
    expense: null,
    comment: 'commment section',
    typeOfExpense: '',
    typeOfIncome: 'abincome',
    receivedBy: '',
    receivedFor:'test',
    paidFor:'test',
    paidBy: 'user1'
  },{
    date: new Date,
    income: null,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'bgtype of exp',
    typeOfIncome: '',
    receivedBy: '',
    receivedFor:'test',
    paidFor:'test',
    paidBy: 'user1'
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'sttype of exp',
    typeOfIncome: 'stincome',
    receivedBy: 'user1',
    receivedFor:'test',
    paidFor:'test',
    paidBy: 'user1'
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'dfincome',
    receivedBy: 'user1',
    receivedFor:'test',
    paidFor:'test',
    paidBy: 'user1'
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'rtincome',
    receivedBy: 'user1',
    receivedFor:'test',
    paidFor:'test',
    paidBy: 'user1'
  },{
    date: new Date,
    income: 12,
    expense: 45,
    comment: 'commment section',
    typeOfExpense: 'type of exp',
    typeOfIncome: 'fsincome',
    receivedBy: 'user1',
    receivedFor:'test',
    paidFor:'test',
    paidBy: 'user1'
  }
  ];
  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Confirm to delete', 'Do you really want to delete ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(AddTransactionComponent, dialogConfig);
}
}
