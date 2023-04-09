import { Component, Input } from '@angular/core';
import { ICheckListForm } from 'src/app/interfaces/question-form.interface';

@Component({
  selector: 'app-review-answer',
  templateUrl: './review-answer.component.html',
  styleUrls: ['./review-answer.component.scss']
})
export class ReviewAnswerComponent {
  @Input() dataSource: ICheckListForm[] = [];
}
