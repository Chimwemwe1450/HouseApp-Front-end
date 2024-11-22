import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost/phpscript/'; 

  constructor(private http: HttpClient) {}

  createUser(user: { name: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}users.php`, user);
  }


  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}users.php`, { responseType: 'json' })
      .pipe(
        map(response => {
          
          if (response && response.error) {
            return { status: 'error', message: response.error.message };
          }
          return response;
        })
      );
  }
}