import { Component } from '@angular/core';
import { CursosDisponibles } from './models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CursosService } from '../../../core/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCursoComponent } from './components/dialogo-curso/dialogo-curso.component';
import { generarId } from '../../shared/utils';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})

export class CursosComponent {
  listaCursos = '';
  cursosDisponibles: CursosDisponibles[] = [];

  // displayedColumns: string[] = ['id', 'nombre', 'inicio', 'fin', 'acciones'];
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'acciones'];

  dataSource: CursosDisponibles[] = [
    {
      id: 'DJHN',
      nombre: 'Angular',
      // inicio: new Date(),
      // fin: new Date(),
      price: 55454
    },

    {
      id: 'JAHS',
      nombre: 'ReactJS',
      // inicio: new Date(),
      // fin: new Date(),
      price: 55454
    },

    {
      id: 'LAÑO',
      nombre: 'Programación Web',
      // inicio: new Date(),
      // fin: new Date(),
      price: 55454
    },

    {
      id: 'FHNH',
      nombre: 'Photoshop',
      // inicio: new Date(),
      // fin: new Date(),
      price: 55454
    },

    {
      id: 'ERPO',
      nombre: 'Marketing Digital',
      // inicio: new Date(),
      // fin: new Date(),
      price: 55454
    }
  ];

  cursosForm!: FormGroup;
  editarCurso!: CursosDisponibles;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private MatDialog: MatDialog
  ){}

  abrirDialog(): void{
    this.MatDialog.open(DialogoCursoComponent).afterClosed().subscribe({
      next: (value) => {
        this.listaCursos = value.name

        value['id'] = generarId(4);
        this.dataSource = [...this.dataSource, value]; 
      }
    })
  }

  modificarCurso(editarCurso: CursosDisponibles) {
    this.editarCurso = editarCurso;
    this.cursosForm.patchValue(editarCurso);
  }

  borrarCurso(id: string) {
    if (confirm('¿Desea borrar el curso?')) {
      this.cursosService.borrarCursoById(id);
    }
  }
}
