import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

fdescribe('AuthService', () => {
  let service: AuthService;
  let router: Router;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()]
    });
    service = TestBed.inject(AuthService);
  });

  it('Al llamar al login, debe redireccionar al dashboard', () => { 
    const spyOnNavigate = spyOn(router, 'navigate');
    service.login;
    expect(spyOnNavigate).toHaveBeenCalled();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
