import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-curso',
  templateUrl: './dialogo-curso.component.html',
  styleUrl: './dialogo-curso.component.scss'
})

export class DialogoCursoComponent {
  cursoForm!: FormGroup;

constructor(
  private fb: FormBuilder,
  private matDialogRef: MatDialogRef<DialogoCursoComponent>,
  public dialogRef: MatDialogRef<DialogoCursoComponent>
){
  this.cursoForm = this.fb.group({
    nombre: [null, Validators.required],
    inicio: [],
    fin: [],
  })
}

agregarCurso(): void {
  if(this.cursoForm.valid) {
    this.matDialogRef.close(this.cursoForm.value);
  } else {}
}
}
