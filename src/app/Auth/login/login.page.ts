import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  loginData = {
    email: '',
    password: ''
  };

  constructor() {}

  onLogin() {
    console.log('Login Data:', this.loginData);
   
  }

}
