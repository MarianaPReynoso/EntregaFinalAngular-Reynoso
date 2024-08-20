import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoCursoComponent } from './components/dialogo-curso/dialogo-curso.component';
import { DetallesCursoComponent } from './pages/detalles-curso/detalles-curso.component';


@NgModule({
  declarations: [CursosComponent, DialogoCursoComponent, DetallesCursoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    MatDialogModule
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
