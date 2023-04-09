import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFormBuilderComponent } from './question-form-builder.component';

describe('QuestionFormBuilderComponent', () => {
  let component: QuestionFormBuilderComponent;
  let fixture: ComponentFixture<QuestionFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
