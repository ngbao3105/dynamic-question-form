import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { IBaseForm, IFormAdapterConfig } from 'src/app/interfaces/question-form.interface';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],

})
export class TextInputComponent {
  public dynamicFormConfig: IBaseForm | undefined;
  public formControl: FormControl = new FormControl('')
  @Input() set formConfig(value: IBaseForm) {
    this.dynamicFormConfig = value;
    this.formControl = this.dynamicFormConfig?.formControl || this.formControl;
  };

}
