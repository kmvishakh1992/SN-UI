import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  welcomeData(){
    return this.http.get<MessageList>('http://localhost:8080/list');
  }
  testError(){
    return this.http.get('http://localhost:8080/testerror');
  }
}
export class MessageList{
  constructor(public name:any, public id:any,public email:any){}
}
