import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosDisponibles } from '../../models';
import { CursosService } from '../../../../../core/services/cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-curso',
  templateUrl: './detalles-curso.component.html',
  styleUrl: './detalles-curso.component.scss'
})

export class DetallesCursoComponent {
  curso$: Observable<CursosDisponibles | undefined>;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute 
  ) {
    this.curso$ = this.cursosService.obtenerCursoById(
      this.activatedRoute.snapshot.params['id']
    );
  }
}
