import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TypeQuestionFormEnum } from '../enum/question-form.enum';
import { FormControl, FormGroup } from '@angular/forms';
import { IBaseForm, ICheckListOption, IFormAdapterConfig } from '../interfaces/question-form.interface';

@Component({
  selector: 'app-form-control-adapter',
  templateUrl: './form-control-adapter.component.html',
  styleUrls: ['./form-control-adapter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormControlAdapterComponent {
  public FORM_TYPE_ENUM = TypeQuestionFormEnum;
  @Input() formConfig: IBaseForm | undefined;

}
