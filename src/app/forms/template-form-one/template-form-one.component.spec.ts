import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormOneComponent } from './template-form-one.component';

describe('TemplateFormOneComponent', () => {
  let component: TemplateFormOneComponent;
  let fixture: ComponentFixture<TemplateFormOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFormOneComponent]
    });
    fixture = TestBed.createComponent(TemplateFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
