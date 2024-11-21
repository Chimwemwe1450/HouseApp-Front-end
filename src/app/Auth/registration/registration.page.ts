import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage  {
  RegData = {
    username:'',
    email: '',
    password: ''
  };

  constructor() {}

  onReg() {
    console.log('Reg Data:', this.RegData);
   
  }
}
