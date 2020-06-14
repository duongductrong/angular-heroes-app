import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient, private jwtService: JwtService) {}

  private heroesUrl = 'http://localhost:8000';

  private httpOptions = {
    headers: {
      Authorization: `leon ${this.jwtService.getToken()}`,
    },
  };

  getHeroes(): Observable<any> {
    return this.httpClient.get<any>(`${this.heroesUrl}/api/heroes`).pipe(
      map((data) => {
        return data.heroes;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }

  getHero(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.heroesUrl}/api/heroes/${id}`).pipe(
      map(({ hero }) => hero),
      catchError((err) => of(err))
    );
  }

  addHero(data: Hero): Observable<any> {
    return this.httpClient
      .post<any>(`${this.heroesUrl}/api/heroes`, data, this.httpOptions)
      .pipe(
        map((res) => {
          return res.hero;
        }),
        catchError((err) => {
          return of(err);
        })
      );
  }

  updateHero(id, data): Observable<any> {
    return this.httpClient
      .put<any>(`${this.heroesUrl}/api/heroes/${id}`, data, this.httpOptions)
      .pipe(
        map(({ hero }) => hero),
        catchError((err) => of(err))
      );
  }

  deleteHero(id): Observable<any> {
    return this.httpClient
      .delete<any>(`${this.heroesUrl}/api/heroes/${id}`, this.httpOptions)
      .pipe(catchError((err) => of(err)));
  }
}
