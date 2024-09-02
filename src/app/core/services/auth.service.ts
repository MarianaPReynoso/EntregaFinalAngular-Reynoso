import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../features/dashboard/users/models';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private VALID_TOKEN = 'sjdkhddkjhfjvnfjhg';

  private _authUser$ = new BehaviorSubject<User | null>(null);
  authUser$ = this._authUser$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(data: { email: string; password: string }) {
    this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          email: data.email,
          password: data.password,
        },
      })
      .subscribe({
        next: (response) => {
          if (!response.length) {
            alert('Usuario/contraseña inválida');
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this._authUser$.next(authUser);
            this.router.navigate(['dashboard', 'inicio']);
          }
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    console.log('TOKEN', token);
    if (!token) {
      return of(false);
    }
    return this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          token,
        },
      })
      .pipe(
        map((response) => {
          console.log('HERE', response);
          if (!response.length) {
            return false;
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this._authUser$.next(authUser);
            return true;
          }
        })
      );
  }
}
