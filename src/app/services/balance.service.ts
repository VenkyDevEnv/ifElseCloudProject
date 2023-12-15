import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  baseURL = 'https://1.api.fy23ey06.careers.ifelsecloud.com/';
  constructor(private http: HttpClient) {}

  getBalance(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}`);
  }
}
