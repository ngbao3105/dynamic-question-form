import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionFormBuilderComponent } from '../question-form-builder/question-form-builder.component';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent {
  constructor(private _router: Router, private _matDialog: MatDialog) { }
  public openQuestionForm() {
    this._router.navigateByUrl('/form/builder');
    let questionDialog = this._matDialog.open(QuestionFormBuilderComponent, {
      width: '600px',
    });
    questionDialog?.afterClosed().subscribe(() => {
      this._router.navigateByUrl('/form');

    })
  }
}
