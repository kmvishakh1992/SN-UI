import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }
  welcomeData(){
    return this.http.get<MessageList>(`${environment.apiUrl}/list`);
  }
  testError(){
    return this.http.get(`${environment.apiUrl}/testerror`);
  }
}
export class MessageList{
  constructor(public name:any, public id:any,public email:any){}
}
