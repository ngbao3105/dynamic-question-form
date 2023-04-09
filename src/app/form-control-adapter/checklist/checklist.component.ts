import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BehaviorSubject, tap } from 'rxjs';
import { IBaseForm, ICheckListOption } from 'src/app/interfaces/question-form.interface';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChecklistComponent implements OnInit {
  public options$ = new BehaviorSubject<ICheckListOption[]>([]);
  public otherAnswerControl = new FormControl('');
  @Input() question: string = '';
  @Input() formConfig: IBaseForm = {};
  @Output() optionChanges = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.otherAnswerControl.valueChanges?.pipe(tap(value => { this.formConfig['otherValue'] = `Other - ${value}` })).subscribe()
  }
  optionChange(option: ICheckListOption, state: MatCheckboxChange) {
    this.formConfig.formControl?.markAsTouched();
    let answers = this.formConfig?.answers as string[];
    let selectedOption = option?.id || '';
    if (state?.checked) {
      answers.push(selectedOption);
    } else {
      let selectedIdx = answers?.findIndex(value => value === selectedOption);
      answers?.splice(selectedIdx, 1);
    }
    console.log(this.formConfig.formControl);

    this.formConfig?.formControl?.setValue(answers);
  }
}
