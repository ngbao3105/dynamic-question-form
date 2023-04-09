import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFormAnswerComponent } from './question-form-answer.component';

describe('QuestionFormAnswerComponent', () => {
  let component: QuestionFormAnswerComponent;
  let fixture: ComponentFixture<QuestionFormAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFormAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFormAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
