import { Component, OnDestroy, OnInit } from '@angular/core';
import { TypeQuestionFormEnum } from '../enum/question-form.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { IBaseForm } from '../interfaces/question-form.interface';
import { FormService } from '../services/form-service/formn-service.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionFormAddQuestionComponent } from '../question-form/question-form-add-question/question-form-add-question.component';
import { QuestionFormAnswerComponent } from '../question-form-answer/question-form-answer.component';
import { BehaviorSubject, Subject, Subscription, takeUntil, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form-builder',
  templateUrl: './question-form-builder.component.html',
  styleUrls: ['./question-form-builder.component.scss']
})
export class QuestionFormBuilderComponent implements OnInit, OnDestroy {
  public formGroup = new FormGroup<any>([]);
  public questionFormConfigs: IBaseForm[];
  private _formControlSubscriptions: Subscription[] = [];
  constructor(private _formService: FormService, private _dialog: MatDialog, private _router: Router) {
    this.questionFormConfigs = this._formService.questionFormConfig;

  }
  ngOnInit(): void {
    this._refreshFormGroup(this.questionFormConfigs);

  }

  addNewQuestion() {
    let newQuestionDialog = this._dialog.open(QuestionFormAddQuestionComponent, { width: '500px', data: { title: 'Add new question' }, panelClass: 'my-dialog-class' })
    newQuestionDialog.afterClosed().subscribe(response => {
      if (!response) { return; }
      this.questionFormConfigs = this._formService.reRenderQuestionForm([...this._formService.questionFormConfig, response]);
      this._refreshFormGroup(this.questionFormConfigs);

    })
  }

  reviewAnswer() {
    if (!this.formGroup.invalid) {
      this._router.navigateByUrl('/form/answers');
      let answerDialog = this._dialog.open(QuestionFormAnswerComponent, { width: '500px', data: this.questionFormConfigs, panelClass: 'my-dialog-class' })
      answerDialog.afterClosed().subscribe(() => {
        this._router.navigateByUrl('/form/builder');
      })
    }
    this.formGroup.markAllAsTouched();
  }


  private _refreshFormGroup(formConfig: IBaseForm[]) {
    this.formGroup = new FormGroup([]);
    this._formControlSubscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    this._formControlSubscriptions = [];

    formConfig.forEach(config => {
      this.formGroup.addControl((config?.id || ''), config.formControl);
      let formSubscription = config?.formControl?.valueChanges.pipe(tap(value => config['answers'] = value))?.subscribe();
      this._formControlSubscriptions.push(formSubscription as Subscription)
    })
  }
  ngOnDestroy(): void {
    this._formService.setQuestionFormConfig(this._formService.getDefaultQuestionForm());
  }
}
