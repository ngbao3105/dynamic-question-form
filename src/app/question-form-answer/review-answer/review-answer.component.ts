import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TypeQuestionFormEnum } from 'src/app/enum/question-form.enum';
import { ICheckListForm } from 'src/app/interfaces/question-form.interface';

@Component({
  selector: 'app-review-answer',
  templateUrl: './review-answer.component.html',
  styleUrls: ['./review-answer.component.scss']
})
export class ReviewAnswerComponent {
  public typeQuestionFormEnum = TypeQuestionFormEnum;
  @Input() dataSource: ICheckListForm[] = [];
}
