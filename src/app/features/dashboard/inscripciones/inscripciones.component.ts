import { Component } from '@angular/core';
import { Estudiantes } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { generarClase, generarId } from '../../shared/utils';
import { MiniDialogoComponent } from './components/mini-dialogo/mini-dialogo.component';
import { InscripcionesService } from '../../../core/services/inscrpciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})

export class InscripcionesComponent {
  listaAlumnos = '';

  displayedColumns: string[] = ['id', 'name', 'curso', 'clase', 'startDate', 'endDate', 'actions'];
  dataSource: Estudiantes[] = [
    {
      id: 1,
      name: 'Ana',
      lastName: 'Perez',
      curso: 'Angular',
      clase: 'A255',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },

    {
      id: 2,
      name: 'Mateo ',
      lastName: 'Hernandez',
      curso: 'Programación Web',
      clase: 'B284',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },

    {
      id: 3,
      name: 'Jorgelina',
      lastName: 'Abba',
      curso: 'ReactJs',
      clase: 'C475',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },
  ];

  constructor(
    private matDialog: MatDialog, 
    private incripcionesService: InscripcionesService
  ) {}

  openDialog(): void {
    this.matDialog.open(DialogoComponent).afterClosed().subscribe({
      next: (value) => {        
        this.listaAlumnos = value.name;

        value['id'] = generarId(2);
        value['clase'] = generarClase(4);
        this.dataSource = [...this.dataSource, value]; 
      },
    });
  }

  modificarAlumno(editarAlumno: Estudiantes) {
    this.matDialog.open(DialogoComponent, {data: editarAlumno}).afterClosed().subscribe({
      next: (value) => {
        if(!!value) {
          // this.dataSource = this.dataSource.map((el) => el.id === editarAlumno.id ? {...value, id:editarAlumno.id} : el);
          this.incripcionesService.editEnroll(editarAlumno.id, value).subscribe({
            next: (inscripciones) => {
              // this.dataSource = {...inscripciones};
            }
          })
        }
      }
    });
  }

  borrarAlumnoById(id: number): void {
    this.matDialog.open(MiniDialogoComponent).afterClosed().subscribe({
      next:
        () => this.dataSource = this.dataSource.filter((el) => el.id != id)
    })
  }
}