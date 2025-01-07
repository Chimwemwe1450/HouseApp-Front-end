
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/Auth.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  };

  isModalOpen = false; 

  constructor(private router: Router, private user: UserService, private auth: AuthService) {}

  onLogin() {
    this.user.getUsers().subscribe(response => {
      if (response.status === 'success' && Array.isArray(response.data)) {
        const user = response.data.find((user: any) => user.email === this.loginData.email && user.password === this.loginData.password);

        if (user) {
          this.auth.login(); 
          this.router.navigate(['/addingahouse']);
        } else {
          alert('Login failed: Invalid credentials');
        }
      } else {
        alert('Response is not in the expected format:');
      }
    });
  }
}