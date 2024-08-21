import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cantidad, Courses, Students } from '../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})

export class DialogComponent {
  studentForm: FormGroup;
  disableSelect = new FormControl(false);

  courses: Courses[] = [
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'ReactJS', viewValue: 'ReactJS'},
    {value: 'Programación Web', viewValue: 'Programación Web'},
    {value: 'Photoshop', viewValue: 'Photoshop'},
    {value: 'Marketing', viewValue: 'Marketing Digital'},
  ];

  amount: Cantidad[] = [
    {value: 1, viewValue: 1},
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
  ];

  constructor (
    private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<DialogComponent>,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject (MAT_DIALOG_DATA) public editarCurso?: Students
  ) {
    this.studentForm = this.fb.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      finishedCourses: [],
      studying: [Validators.required],
    });

    if(this.editarCurso) {
      this.studentForm.patchValue(this.editarCurso);
    }
  }

  onSubmit(): void {
    if(this.studentForm.valid) {
      this.matDialogRef.close(this.studentForm.value);
    } else {

    }
  }
}
