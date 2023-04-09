import { Component, OnInit } from '@angular/core';
import { TypeQuestionFormEnum } from '../enum/question-form.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { IBaseForm } from '../interfaces/question-form.interface';
import { FormService } from '../services/form-service/formn-service.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionFormAddQuestionComponent } from '../question-form/question-form-add-question/question-form-add-question.component';
import { QuestionFormAnswerComponent } from '../question-form-answer/question-form-answer.component';

@Component({
  selector: 'app-question-form-builder',
  templateUrl: './question-form-builder.component.html',
  styleUrls: ['./question-form-builder.component.scss']
})
export class QuestionFormBuilderComponent implements OnInit {
  public formGroup = new FormGroup<any>([]);
  public questionFormConfigs: IBaseForm[];
  constructor(private _formService: FormService, private _dialog: MatDialog) {
    this.questionFormConfigs = this._formService.questionFormConfig;

  }
  ngOnInit(): void {
    this.questionFormConfigs.forEach(config => {
      this.formGroup.addControl((config?.id || ''), config.formControl);
    })

    this.formGroup.valueChanges.subscribe(() => {
      console.log(this.formGroup.getRawValue());
    })
  }

  addNewQuestion() {
    let newQuestionDialog = this._dialog.open(QuestionFormAddQuestionComponent, { width: '500px', data: { title: 'Add new question' }, panelClass: 'my-dialog-class' })
    newQuestionDialog.afterClosed().subscribe(response => {
      this.questionFormConfigs = this._formService.reRenderQuestionForm([...this._formService.questionFormConfig, response]);

    })
  }

  reviewAnswer() {
    let answerDialog = this._dialog.open(QuestionFormAnswerComponent, { width: '500px', data: this.questionFormConfigs, panelClass: 'my-dialog-class' })
    answerDialog.afterClosed().subscribe(response => {
    })
  }
}
