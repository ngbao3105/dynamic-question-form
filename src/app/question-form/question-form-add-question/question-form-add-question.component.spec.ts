import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFormAddQuestionComponent } from './question-form-add-question.component';

describe('QuestionFormAddQuestionComponent', () => {
  let component: QuestionFormAddQuestionComponent;
  let fixture: ComponentFixture<QuestionFormAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFormAddQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFormAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
