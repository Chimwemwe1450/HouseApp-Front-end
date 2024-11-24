import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://633a912f471b8c39556fad0f.mockapi.io/Registration'; 

  constructor(private http: HttpClient) {}

  createUser(user: { Email: string; Password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user); 
  }
  
  // Get all users
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}