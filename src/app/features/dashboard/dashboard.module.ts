import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [DashboardComponent, CursosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }