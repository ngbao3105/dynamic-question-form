import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormAnswerComponent } from './question-form-answer.component';
import { ReviewAnswerComponent } from './review-answer/review-answer.component';



@NgModule({
  declarations: [QuestionFormAnswerComponent, ReviewAnswerComponent],
  imports: [
    CommonModule
  ],
  exports: [QuestionFormAnswerComponent]

})
export class QuestionFormAnswerModule { }
