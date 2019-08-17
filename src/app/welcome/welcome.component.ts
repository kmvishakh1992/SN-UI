import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService, MessageList } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  name = '';
account: MessageList;
  constructor(private _dataService: WelcomeDataService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
  }
  todoList(){
this.router.navigate(['todos']);
  }
  getList(){
console.log(this._dataService.testError());
this._dataService.testError().subscribe(
  response =>this.sucess(response),
  error => this.error(error)
);
  }
  sucess(response){
    this.account=response;
  }
  error(error){
    console.log(error);
this.account=error.error.message;
  }
}
