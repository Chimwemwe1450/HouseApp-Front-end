import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private apiUrl = 'https://633a912f471b8c39556fad0f.mockapi.io/Save-house'; // Update to the correct API endpoint

  constructor(private http: HttpClient) {}

  // Add a house
  addHouse(houseData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.apiUrl, houseData, { headers });
  }

  // Delete a house
  deleteHouse(houseId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${houseId}`);
  }
}
