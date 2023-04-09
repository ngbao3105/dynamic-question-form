import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './question-form.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionFormComponent
  },
  {
    path: 'builder',
    loadChildren: () => import('../question-form-builder/question-form-builder.module').then(m => m?.QuestionFormBuilderModule)
  },
  {
    path: 'answers',
    loadChildren: () => import('../question-form-answer/question-form-answer.module').then(m => m?.QuestionFormAnswerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionFormRoutingModule { }
