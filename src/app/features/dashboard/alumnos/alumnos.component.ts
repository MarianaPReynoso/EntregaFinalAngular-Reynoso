import { Component } from '@angular/core';
import { Students } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})

export class AlumnosComponent { 
  listadoAlumnos = '';

  displayedColumns: string[] = ['position', 'name', 'finishedCourses', 'studying', 'actions'];
  dataSource: Students[] = [
    {
      position: 1,
      name: 'Ana',
      lastName: 'Perez',
      finishedCourses: 2,
      studying: 'Angular',
    },

    {
      position: 2,
      name: 'Mateo',
      lastName: 'Hernandez',
      finishedCourses: 0,
      studying: 'Programación Web',
    },

    {
      position: 3,
      name: 'Jorgelina',
      lastName: 'Abba',
      finishedCourses: 1,
      studying: 'ReactJs',
    },

    {
      position: 4,
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
        this.dataSource = [...this.dataSource, value];
        },
    })
  }

  editStudents() {

  }

}
