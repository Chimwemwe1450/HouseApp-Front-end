import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service'; 
import { Router } from '@angular/router';  // Import Router for navigation

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  RegData = {
    name: '', 
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onReg() {
  

    this.userService.createUser(this.RegData).subscribe(
      response => {

        if (response.status === 'success') {

          this.router.navigate(['/login']);
        } else if (response.message === 'User already exists, but you can register again.') {

          alert('User already exists, but you can register again with the same information.');
        }
      },
      error => {
       alert(error);
   
      }
    );
  }
}
