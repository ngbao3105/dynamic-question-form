import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlAdapterComponent } from './form-control-adapter.component';
import { ChecklistModule } from './checklist/checklist.module';
import { TextInputModule } from './text-input/text-input.module';



@NgModule({
  declarations: [
    FormControlAdapterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChecklistModule,
    TextInputModule
  ],
  exports: [FormControlAdapterComponent]
})
export class FormControlAdapterModule { }
