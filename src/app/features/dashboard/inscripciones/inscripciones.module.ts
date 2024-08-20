import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MiniDialogoComponent } from './components/mini-dialogo/mini-dialogo.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InscripcionesComponent, DialogoComponent, MiniDialogoComponent],
  imports: [
    CommonModule,
    InscripcionesRoutingModule, 
    MatDialogModule, 
    SharedModule,
  ],
  exports: [InscripcionesComponent]
})

export class InscripcionesModule { }

