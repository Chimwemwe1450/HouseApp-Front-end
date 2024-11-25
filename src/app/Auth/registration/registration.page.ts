import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  RegData = {
    Email: '',
    Password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onReg() {
    this.userService.createUser(this.RegData).subscribe(
      (response) => {
  

        if (response && response.id) {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        } else if (response.message === 'User already exists') {
     
          alert('User already exists. Try with different credentials.');
        }
      },
      (error) => {

        alert('An error occurred during registration. Please try again.');
      }
    );
  }
}
