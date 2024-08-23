import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from '../../shared/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MiniDialogComponent } from './components/mini-dialog/mini-dialog.component';


@NgModule({
  declarations: [AlumnosComponent, DialogComponent, MiniDialogComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    MatDialogModule,
    MatCheckboxModule,
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
