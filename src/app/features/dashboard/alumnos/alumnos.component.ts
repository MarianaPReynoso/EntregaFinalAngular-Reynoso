import { Component } from '@angular/core';
import { Students } from './models';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})

export class AlumnosComponent { 
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

  editStudents() {

  }

}
