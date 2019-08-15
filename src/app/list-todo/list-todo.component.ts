import { Component, OnInit } from '@angular/core';
import { WelcomeDataService, MessageList } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.sass']
})
export class ListTodoComponent implements OnInit {

  account: MessageList;
  constructor(private _dataService: WelcomeDataService) { }

  ngOnInit() {
    this.getList();
  }
  getList(){
    console.log(this._dataService.welcomeData());
    this._dataService.welcomeData().subscribe(
      response =>this.sucess(response),
      error => this.error(error)
    );
      }
      sucess(response){
        this.account=response;
      }
      error(error){
    //this.account='something went wrong';
      }
}
