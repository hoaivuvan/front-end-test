import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  baseUrl: string

  constructor(protected httpClient: HttpClient) {
    this.baseUrl = 'https://api-testing.whatalocation.io/api/v1/auth/jwt'
  }

  signIn(signInInfo: { email: string, password: string }) {
    return this.httpClient.post(this.baseUrl, signInInfo)
      .pipe(
        tap((obj: any) => {
          console.log(obj);
          
          localStorage.setItem('AuthenticateToken', obj.token);
          return obj;
        }),
        catchError(async (e) => {
          console.log(e);
        })
      );
  }

}
