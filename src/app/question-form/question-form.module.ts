import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../services/form-service/formn-service.service';
import { FormDataService } from '../services/data-service/form-data.service';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionFormAddQuestionComponent } from './question-form-add-question/question-form-add-question.component';
import { QuestionFormBuilderModule } from '../question-form-builder/question-form-builder.module';
import { QuestionFormAnswerModule } from '../question-form-answer/question-form-answer.module';
import { RouterModule } from '@angular/router';
import { QuestionFormRoutingModule } from './question-form-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    QuestionFormComponent,
    QuestionFormAddQuestionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    QuestionFormBuilderModule,
    QuestionFormAnswerModule,
    QuestionFormRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [FormService, FormDataService]
})
export class QuestionFormModule { }
