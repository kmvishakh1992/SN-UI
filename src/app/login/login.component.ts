import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  hide = true;

  invalid: boolean = false;
  constructor(private router: Router, private _auth: AuthenticationService) { }

  ngOnInit() {
  }
  change() {
    if (this._auth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalid = false;
    }
    else{
      this.invalid=true;
    }
  }
}
