import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface Course {
  id:number;
  description:string;
  iconUrl: string;
  courseListIcon: string;
  longDescription: string;
  category:string;
  lessonsCount:number;
}
@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  incomeExpenseValue:  any ='Expense';
  expenseValue: string = 'Raw material';
  incomeValue: string = 'inc1';
  paidBy: string= 'testUser1';
  receivedBy: string = 'testUser1';
  userList = ['testUser1','testUser2'];
  incomeExpenseType = ['Expense', 'Income'];
  expenseType= ['Raw material','Tea','Transportation','Electricity','Others'];
  incomeType=['inc1','inc2','inc3','others'];
  form: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<AddTransactionComponent>,
      @Inject(MAT_DIALOG_DATA) {description,longDescription,
          category}:Course ) {

      this.description = description;


      this.form = fb.group({
          description: [description, Validators.required],
          category: [category, Validators.required],
          longDescription: [longDescription,Validators.required]
      });

  }

  ngOnInit() {

  }


  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}