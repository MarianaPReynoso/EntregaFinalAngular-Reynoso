import { Component } from '@angular/core';
import { Students } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MiniDialogComponent } from './components/mini-dialog/mini-dialog.component';
import { generarClase } from '../../shared/utils';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})

export class AlumnosComponent { 
  listadoAlumnos = '';

  displayedColumns: string[] = ['position', 'id', 'name', 'finishedCourses', 'studying', 'actions'];
  dataSource: Students[] = [
    {
      position: 1,
      id: 'BS25',
      name: 'Ana',
      lastName: 'Perez',
      finishedCourses: 2,
      studying: 'Angular',
    },

    {
      position: 2,
      id: 'NU56',
      name: 'Mateo',
      lastName: 'Hernandez',
      finishedCourses: 0,
      studying: 'Programación Web',
    },

    {
      position: 3,
      id: 'WE58',
      name: 'Jorgelina',
      lastName: 'Abba',
      finishedCourses: 1,
      studying: 'ReactJs',
    },

    {
      position: 4,
      id: 'AP82',
      name: 'Vanesa',
      lastName: 'Dorego',
      finishedCourses: 3,
      studying: '-',
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(DialogComponent).afterClosed().subscribe({
      next: (value) => {
        this.listadoAlumnos = value.name;
        value['id'] = generarClase(4);
        this.dataSource = [...this.dataSource, value];
        },
    });
  }

  editStudents(editAlumno: Students) {
    this.matDialog.open(DialogComponent, {data: editAlumno}).afterClosed().subscribe({
      next: (value) => {
        if(!!value) {
          this.dataSource = this.dataSource.map((el) => el.id === editAlumno.id ? {...value, id:editAlumno.id} : el);
        }
      }
    });
  }

  deleteStudent(id: string): void {
    this.matDialog.open(MiniDialogComponent).afterClosed().subscribe({
      next:
        () => this.dataSource = this.dataSource.filter((el) => el.id != id)
    })
  }
}
