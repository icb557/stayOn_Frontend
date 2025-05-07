import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiUrl = 'api/user';
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.myAppUrl}api/users`);
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/${email}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.myAppUrl}${this.myApiUrl}`, user);
  }

  updateUser(email: string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(
      `${this.myAppUrl}${this.myApiUrl}/${email}`,
      user
    );
  }

  deleteUser(email: string): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${email}`);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/login`, {
      email,
      password,
    });
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post<any>(
      `${this.myAppUrl}${this.myApiUrl}/request-password-reset`,
      { email }
    );
  }
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post<any>(
      `${this.myAppUrl}${this.myApiUrl}/reset-password`,
      { token, newPassword }
    );
  }
}
