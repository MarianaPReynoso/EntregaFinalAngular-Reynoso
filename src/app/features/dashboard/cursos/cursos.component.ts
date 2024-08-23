import { Component } from '@angular/core';
import { CursosDisponibles } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCursoComponent } from './components/dialogo-curso/dialogo-curso.component';
import { generarId } from '../../shared/utils';
import { CursosService } from '../../../core/services/cursos.service';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

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
