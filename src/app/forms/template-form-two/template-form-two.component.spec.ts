import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormTwoComponent } from './template-form-two.component';

describe('TemplateFormTwoComponent', () => {
  let component: TemplateFormTwoComponent;
  let fixture: ComponentFixture<TemplateFormTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFormTwoComponent]
    });
    fixture = TestBed.createComponent(TemplateFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
