import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For navigation
import { HttpClient } from '@angular/common/http'; // For HTTP requests
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';

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

  constructor(private http: HttpClient, private router: Router, private user: UserService) {}

  onLogin() {


    this.user.getUsers().subscribe(response => {

   
 
      if (response.status === 'success' && Array.isArray(response.data)) {
        const user = response.data.find((user: any) => user.email === this.loginData.email && user.password === this.loginData.password);

        if (user) {
          console.log('Login successful');
    
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
