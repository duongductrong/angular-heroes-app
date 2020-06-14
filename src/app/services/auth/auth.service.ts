import { Injectable } from '@angular/core';
import { JwtService } from '../jwt/jwt.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrls: string = 'http://localhost:8000/api/auth';

  isAuthenticated: boolean = false;

  constructor(private jwtService: JwtService, private httpClient: HttpClient) {
    this.authenticated().subscribe((status) => {
      if (status) {
        this.isAuthenticated = status;
      }
    });
  }
  authenticated(): Observable<any> {
    const token = this.jwtService.getToken();

    return this.httpClient
      .post<any>(
        `${this.authUrls}/authenticate`,
        {},
        {
          headers: {
            Authorization: `leon ${token}`,
          },
        }
      )
      .pipe(
        map((res) => {
          if (res.status > 400 || res.status === 403) {
            return false;
          }
          return true;
        }),
        catchError((err) => {
          if (err.status > 400 || err.status === 403) {
            return of(false);
          }

          return of(true);
        })
      );
  }

  setAuthenticate(status): void {
    this.isAuthenticated = status;
  }

  getAuthenticate(): any {
    return this.isAuthenticated;
  }

  login(data): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrls}/login`, data).pipe(
      map((res) => {
        alert(res.msg);

        this.jwtService.setToken(res.token);

        this.setAuthenticate(true);

        return true;
      }),
      catchError((err) => {
        alert(err.statusText);
        return of(false);
      })
    );
  }

  logout(): any {
    this.jwtService.clearToken();
    this.setAuthenticate(false);

    return true;
  }
}
