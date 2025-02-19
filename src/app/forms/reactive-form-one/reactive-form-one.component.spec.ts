import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormOneComponent } from './reactive-form-one.component';

describe('ReactiveFormOneComponent', () => {
  let component: ReactiveFormOneComponent;
  let fixture: ComponentFixture<ReactiveFormOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormOneComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
