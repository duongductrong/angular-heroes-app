import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  getToken(): any {
    return window.localStorage.getItem('token');
  }

  isToken(): any {
    return window.localStorage.getItem('token') ? true : false;
  }

  setToken(token): void {
    window.localStorage.setItem('token', token);
  }

  clearToken(): void {
    window.localStorage.removeItem('token');
  }
}
