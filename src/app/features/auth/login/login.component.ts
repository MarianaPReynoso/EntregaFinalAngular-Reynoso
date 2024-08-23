import { Component, signal, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
      rol: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      alert('Debe completar los datos solicitados');
      return;
    } else {
      const data = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      }
      this.authService.login(data);
    }
  };

  hide = signal(true);

  esconder(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
