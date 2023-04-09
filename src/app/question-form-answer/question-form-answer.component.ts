import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form-answer',
  templateUrl: './question-form-answer.component.html',
  styleUrls: ['./question-form-answer.component.scss']
})
export class QuestionFormAnswerComponent {

  constructor(private _router: Router, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<QuestionFormAnswerComponent>,
  ) { }
  back() {
    this.dialogRef.close();
    this._router.navigate(['/form/builder']);
  }
}
