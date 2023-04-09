import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormBuilderComponent } from './question-form-builder.component';
import { FormControlAdapterModule } from '../form-control-adapter/form-control-adapter.module';



@NgModule({
  declarations: [QuestionFormBuilderComponent],
  imports: [
    CommonModule,
    FormControlAdapterModule
  ],
  exports: [QuestionFormBuilderComponent]
})
export class QuestionFormBuilderModule { }
