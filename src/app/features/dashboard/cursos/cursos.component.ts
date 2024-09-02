import { Component, OnInit } from '@angular/core';
import { CursosDisponibles } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCursoComponent } from './components/dialogo-curso/dialogo-curso.component';
import { generarId } from '../../shared/utils';
import { CursosService } from '../../../core/services/cursos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

// export class CursosComponent implements OnInit{
//   courses: CursosDisponibles[] = [];
//   loading = false;
//   displayedColumns = ['id', 'name', 'price', 'actions'];
//   courseForm: FormGroup;

//   editingCourse: CursosDisponibles | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private cursosService: CursosService,
//   ) {
//     this.courseForm = this.fb.group({
//       name: [null, [Validators.required]],
//       price: [null, [Validators.required]],
//     });
//   }

//   ngOnInit(): void {
//     this.loadCourses();
//   }

//   loadCourses() {
//     this.loading = true;
//     this.cursosService.obtenerCursos().subscribe({
//       next: (coursesFromDB) => {
//       this.courses = coursesFromDB;
//     },
//     error: () => {},
//     complete: () => {
//       this.loading = false;
//     }, 
//     });
//   }

//   abrirDialog(): void {
//     if (this.courseForm.invalid) {
//       alert('El form es invalido');
//     } else {
//       if (!!this.editingCourse) {
//         this.cursosService
//           .editarCursotById(this.editingCourse.id, this.courseForm.value)
//           .pipe(
//             tap(() => {
//               this.loadCourses();
//               this.editingCourse = null;
//             })
//           )
//           .subscribe();
//       } else {
//         this.cursosService
//           .addCurso(this.courseForm.value)
//           .pipe(tap(() => this.loadCourses()))
//           .subscribe();
//       }

//       this.courseForm.reset();
//     }
//   }

//   deleteCurso(id: string) {
//     if (confirm('Esta seguro?')) {
//       this.cursosService
//         .borrarCursoById(id)
//         .pipe(tap(() => this.loadCourses()))
//         .subscribe();
//     }
//   }

//   editCurso(editingCourse: CursosDisponibles) {
//     this.editingCourse = editingCourse;

//     this.courseForm.patchValue(editingCourse);
//   }
// }

export class CursosComponent {
  courseList = '';
  displayedColumns: string[] = ['id', 'name', 'price', 'actions'];
  dataSource: CursosDisponibles[] = [
    // {
    //   id: 'DJHN',
    //   nombre: 'Angular',
    //   price: 15000,
    // },

    // {
    //   id: 'JAHS',
    //   nombre: 'ReactJS',
    //   price: 15000,
    // },

    // {
    //   id: 'LASO',
    //   nombre: 'Programación Web',
    //   price: 20000,
    // },

    // {
    //   id: 'FHNH',
    //   nombre: 'Photoshop',
    //   price: 22000,
    // },

    // {
    //   id: 'ERPO',
    //   nombre: 'Marketing Digital',
    //   price: 30000,
    // }
  ]

  constructor (
    private matDialog: MatDialog, 
    private cursosService: CursosService
  ) {}

  abrirDialog(): void {
    this.matDialog.open(DialogoCursoComponent).afterClosed().subscribe({
      next: (value) => {
        this.courseList = value.name;
        value['id'] = generarId(4);
        this.cursosService.addCurso(value).subscribe({
          next: (cursos) => {
            this.dataSource = [...cursos];
          }
        })
        // this.dataSource = [...this.dataSource, value];
      },
    });
  }

  editCurso(editarCurso: CursosDisponibles) {
    this.matDialog.open(DialogoCursoComponent, {data: editarCurso}).afterClosed().subscribe({
      next: (value) => {
        if(!!value) {
          // this.dataSource = this.dataSource.map((el) => el.id === editarCurso.id ? {...value, id:editarCurso.id} : el);
          this.cursosService.editarCursotById(editarCurso.id, value).subscribe({
            next: (cursos) => {
              this.dataSource = [...cursos];
            }
          })
        }
      }
    });
  }

  deleteCurso(id: string) {
    if(confirm('¿Desea borrar el curso?')) {
      // this.dataSource = this.dataSource.filter((el) => el.id != id);
      this.cursosService.borrarCursoById(id).subscribe({
        next: (cursos) => {
          this.dataSource = [...cursos];
        }
      })
    }
  }
}
