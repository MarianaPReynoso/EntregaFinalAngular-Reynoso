import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../features/dashboard/users/models';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private PROBAR_USUARIO: User = {
    email: 'estoesun@email.com',
    password: '123456',
    rol: 'USUARIO'
  };

  private VALID_TOKEN = 'sjdkhd';

  private authUser$ = new BehaviorSubject<User | null> (null);

  authUser = this.authUser$.asObservable();

  constructor(private router: Router, private http: HttpClient) { }

  login(value: User) {
    let params = new HttpParams().set('email', value.email).set('password', value.password);
    this.http.get('http://localhost:3000/users', {params}).subscribe((data: any) => {
      console.log('BBDD: ', data);

      if(data[0].email === value.email && data[0].password === value.password) {
        localStorage.setItem('token', this.VALID_TOKEN);
        this.router.navigate(['dashboard', 'inicio']);
      } else {
        alert ('Este usuario no está en la BBDD')
      }
    })

    // this.authUser$.next(this.PROBAR_USUARIO);
    
    
  }

  logout() {
    localStorage.removeItem('token');
    this.authUser$.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const isValid = this.VALID_TOKEN === token;
    if(isValid) {
      this.authUser$.next(this.PROBAR_USUARIO)
    }
    return of(isValid);
  }
}
