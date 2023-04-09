import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAXIUM_ANWSER } from 'src/app/constant/common.constant';
import { TypeQuestionFormEnum } from 'src/app/enum/question-form.enum';

@Component({
  selector: 'app-question-form-add-question',
  templateUrl: './question-form-add-question.component.html',
  styleUrls: ['./question-form-add-question.component.scss']
})
export class QuestionFormAddQuestionComponent {

  public formGroup: FormGroup = this.fb.group({
    formType: [TypeQuestionFormEnum.PARAGRAPH, [Validators.required]],
    isRequired: false,
    question: [[], [Validators.required]],
    options: this.fb.array([])
  });

  typeQuestionForm: TypeQuestionFormEnum[] = [TypeQuestionFormEnum.CHECKLIST, TypeQuestionFormEnum.PARAGRAPH];
  typeQuestionFormEnum = TypeQuestionFormEnum;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<QuestionFormAddQuestionComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.registerValueChanges();
  }

  registerValueChanges() {
    this.formGroup?.get('formType')?.valueChanges.subscribe(
      (result) => {
        if (result == this.typeQuestionFormEnum.CHECKLIST) {
          this.formGroup.addControl('isHasOtherOption', this.fb.control(false));
        } else {
          this.formGroup.removeControl('isHasOtherOption');
        }
      }
    )
  }

  get optionsForm() {
    return this.formGroup.get('options') as FormArray
  }

  addOtherOption() {
    if (this.optionsForm.length >= MAXIUM_ANWSER) { return }
    this.optionsForm.push(this.getDefaultOptionControl());
  }

  getDefaultOptionControl() {
    return this.fb.group({ option: this.fb.control('', [Validators.required]) });
  }

  getData() {
    return this.formGroup.getRawValue()
  }

  submit() {
    if (this.formGroup.invalid ||
      (this.optionsForm?.length == 0 && this.formGroup.value.formType == TypeQuestionFormEnum.CHECKLIST)) {
      this.formGroup.markAllAsTouched();
      return
    }
    const outputData = this.formGroup.value;
    if (outputData.options && outputData.options.length) {
      outputData.options = outputData.options.map((item: any) => ({ id: item.option, label: item.option }));
    };
    this.dialogRef.close(outputData);
  }
}


