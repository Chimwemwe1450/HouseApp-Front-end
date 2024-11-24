import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: '',
    password: '',
  };
  isModalOpen: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onLogin() {
    this.userService.getUsers().subscribe(
      (users) => {
   
        const user = users.find(
          (u: any) =>
            u.Email === this.loginData.email && 
            u.Password === this.loginData.password 
        );

        if (user) {
          console.log('Login successful');
       
          this.router.navigate(['/addingahouse']);
        } else {
          alert('Login failed: Invalid credentials');
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
        alert('An error occurred while logging in. Please try again later.');
      }
    );
  }
}
