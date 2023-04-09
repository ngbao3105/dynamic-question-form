import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TypeQuestionFormEnum } from 'src/app/enum/question-form.enum';
import { IBaseForm } from 'src/app/interfaces/question-form.interface';

@Injectable()
export class FormService {
  private _questionFormConfig: IBaseForm[] = this.getDefaultQuestionForm();
  constructor() { }


  public get questionFormConfig() {
    return this._questionFormConfig;
  }

  public setQuestionFormConfig(questionFormConfig: IBaseForm[]) {
    this._questionFormConfig = questionFormConfig;
  }
  public getDefaultQuestionForm(): IBaseForm[] {
    return [
      {
        id: (new Date()).getTime().toString(),
        question: 'Please tell us about yourself',
        isRequired: true,
        formType: TypeQuestionFormEnum.PARAGRAPH,
        answers: '',
        formControl: new FormControl('', Validators.required)
      },
      {
        id: (new Date()).getTime().toString(),
        question: 'Please select the languages you know',
        isRequired: true,
        formType: TypeQuestionFormEnum.CHECKLIST,
        answers: [],
        otherValue: '',
        options: [
          { id: 'Typescript', label: 'Typescript' },
          { id: 'Python', label: 'Python' },
          { id: 'C#', label: 'C#' },
          { id: 'Other', label: 'Other' }],
        formControl: new FormControl([], Validators.required)
      }
    ]
  }

  public reRenderQuestionForm(newFormConfigs: IBaseForm[]) {
    let newForm = newFormConfigs?.map(config => this.getNewFormControl(config));
    this.setQuestionFormConfig(newForm)
    return newForm
  }

  public getNewFormControl(formConfig: IBaseForm) {
    let requiredValidators = !!formConfig?.isRequired ? [Validators.required] : null;
    return {
      id: formConfig?.id || (new Date().getTime()).toString(),
      question: formConfig?.question || '',
      isRequired: !!formConfig?.isRequired,
      formType: formConfig?.formType || TypeQuestionFormEnum.PARAGRAPH,
      answers: formConfig?.answers || '',
      options: formConfig?.options || [],
      formControl: formConfig?.formControl || new FormControl(formConfig?.answers || '', requiredValidators)
    }
  }
}
