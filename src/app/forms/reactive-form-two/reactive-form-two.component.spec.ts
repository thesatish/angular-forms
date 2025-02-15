import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTwoComponent } from './reactive-form-two.component';

describe('ReactiveFormTwoComponent', () => {
  let component: ReactiveFormTwoComponent;
  let fixture: ComponentFixture<ReactiveFormTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormTwoComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
