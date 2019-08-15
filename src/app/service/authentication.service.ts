import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }
  authenticate(user,password){
    if(user==='test'&& password===''){
      sessionStorage.setItem('authenticatedUser',user)
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
   let user=  sessionStorage.getItem('authenticatedUser');
   return !(user==null);
  }
  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
