import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './users/models';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent { 
  authUser$: Observable<User | null>;
  showFiller = false;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$.pipe();
  }

  logout() {
    this.authService.logout();
  }
}
