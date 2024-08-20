import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { DetallesCursoComponent } from './cursos/pages/detalles-curso/detalles-curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then((d) => d.InicioModule),
    component: InicioComponent,
  },

  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((d) => d.CursosModule),
    component: CursosComponent,
  },

  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((d) => d.AlumnosModule),
    component: AlumnosComponent,
  },

  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((d) => d.InscripcionesModule),
    component: InscripcionesComponent,
  },

  {
    path: 'inscripciones/:id',
    component: DetallesCursoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }