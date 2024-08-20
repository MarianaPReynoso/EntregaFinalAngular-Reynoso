import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { APP_CONFIG } from '../../../core/injection-tokens';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../../shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatCardModule, 
        MatDividerModule,
        SharedModule
      ],
      providers: [
        provideAnimationsAsync(),
        {
          provide: APP_CONFIG,
          useValue: {
            baseURL: '...',
            version: '2.0',
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El campo email debe ser requerido', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.invalid).toBeTrue();
  });

  it('El campo contraseña debe ser requerido', () => {
    const contraseñaControl = component.loginForm.get('contraseña');
    contraseñaControl?.setValue('');
    expect(contraseñaControl?.invalid).toBeTrue();
  });

  it('El campo rol tiene que ser requerido', () => {
    const rolControl = component.loginForm.get('rol');
    rolControl?.setValue('');
    expect(rolControl?.invalid).toBeTrue();
  });

  it('Cuando se llame a onSubmit, si el formulario es inválido tiene que mostrar un alert', () => {
    const loginForm = component.loginForm;
    loginForm.setValue({
      email: '',
      contraseña: '',
      rol: '',
    });
    const spyAlert = spyOn(window, 'alert');
    component.onSubmit();
    expect(spyAlert).toHaveBeenCalled();
  });

  it('Si se escribe la contraseña, se tiene que poder mostrar', () => {
    const input = fixture.nativeElement.querySelector('input');
    const button = fixture.nativeElement.querySelector('button');

    expect(input.type).toBe('text');
    button.click();
    fixture.detectChanges();
    expect(input.type).toBe('text')
    button.click();
    fixture.detectChanges();
    expect(input.type).toBe('text');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
