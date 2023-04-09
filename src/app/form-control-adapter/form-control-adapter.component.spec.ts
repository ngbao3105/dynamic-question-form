import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlAdapterComponent } from './form-control-adapter.component';

describe('FormControlAdapterComponent', () => {
  let component: FormControlAdapterComponent;
  let fixture: ComponentFixture<FormControlAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlAdapterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
