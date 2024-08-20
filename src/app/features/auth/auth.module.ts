import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from '../../core/services/auth.service';
import { APP_CONFIG } from '../../core/injection-tokens';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule, 
    MatDividerModule,
    SharedModule
  ],
  providers: [
    AuthService,
    {
      provide: APP_CONFIG,
      useValue: {
        baseURL: '...',
        version: '2.0',
      },
    },
  ],
})

export class AuthModule { }
