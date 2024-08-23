import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../features/dashboard/users/models';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // private PROBAR_USUARIO: User = {
  //   email: 'estoesun@email.com',
  //   password: '123456',
  //   rol: 'USUARIO'
  // };

  private VALID_TOKEN = 'sjdkhd';

  private _authUser$ = new BehaviorSubject<User | null> (null);

  authUser$ = this._authUser$.asObservable();

  constructor(
    private router: Router, 
    private http: HttpClient,
  ) {}

  login(data: {email: string; password: string}) {
    this.http.get<User[]>(environment.apiUrl + '/users', {
      params: {
        email: data.email,
        password: data.password,
      },
    }).subscribe({
      next: (response) => {
        if(!response.length) {
          alert('Usuario/contraseña inválida')
        } else {
          const authUser = response[0];
          localStorage.setItem('token', authUser.token);
          this._authUser$.next(authUser);
          this.router.navigate(['dashboard', 'home']);
        }
      },
    });
    // let params = new HttpParams().set('email', value.email).set('password', value.password);
    // this.http.get('http://localhost:3000/users', {params}).subscribe((data: any) => {
    //   console.log('BBDD: ', data);

    //   if(data[0].email === value.email && data[0].password === value.password) {
        
    //     this.router.navigate(['dashboard', 'inicio']);
    //   } else {
    //     alert ('Este usuario no está en la BBDD')
    //   }
    // })

    // this.authUser$.next(this.PROBAR_USUARIO);
    
    
  }

  logout() {
    localStorage.removeItem('token');
    this._authUser$.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if(!token) {
      return of (false)
    }
    return this.http.get<User[]>(environment.apiUrl + '/users', {
      params: {
        token,
      },
    }).pipe(map((response) => {
      if(!Response.length) {
        return false;
      } else {
        const authUser = response[0];
        localStorage.setItem('token', authUser.token);
        this._authUser$.next(authUser);
        return true;
      }
    }))
    // const isValid = this.VALID_TOKEN === token;
    // if(isValid) {
    //   this.authUser$.next(this.PROBAR_USUARIO)
    // }
    // return of(isValid);
  }
}
