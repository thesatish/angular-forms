import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormOneComponent } from './forms/template-form-one/template-form-one.component';
import { TemplateFormTwoComponent } from './forms/template-form-two/template-form-two.component';
import { ReactiveFormOneComponent } from './forms/reactive-form-one/reactive-form-one.component';
import { ReactiveFormTwoComponent } from './forms/reactive-form-two/reactive-form-two.component';


const routes: Routes = [
  { path:'template-form-one', component:TemplateFormOneComponent},
  { path:'template-form-two', component:TemplateFormTwoComponent},
  { path:'reactive-form-two', component:ReactiveFormOneComponent},
  { path:'reactive-form-two', component:ReactiveFormTwoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
