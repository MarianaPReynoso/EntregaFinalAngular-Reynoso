import { Component, Inject } from '@angular/core';
import { Estudiantes } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cursos } from '../../models';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})
export class DialogoComponent {
  courseForm: FormGroup;

  courses: Cursos[] = [
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'ReactJS', viewValue: 'ReactJS'},
    {value: 'Programación Web', viewValue: 'Programación Web'},
    {value: 'Photoshop', viewValue: 'Photoshop'},
    {value: 'Marketing', viewValue: 'Marketing Digital'},
  ];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<DialogoComponent>,
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject (MAT_DIALOG_DATA) public editarCurso?: Estudiantes
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      curso: [Validators.required],
      startDate: [],
      endDate: [],
    });

    if(this.editarCurso) {
      this.courseForm.patchValue(this.editarCurso);
    }
  }

  onSubmit(): void {
    if(this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {

    }
  }
}
