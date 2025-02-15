import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { TemplateFormOneComponent } from './forms/template-form-one/template-form-one.component';
import { TemplateFormTwoComponent } from './forms/template-form-two/template-form-two.component';
import { ReactiveFormOneComponent } from './forms/reactive-form-one/reactive-form-one.component';
import { ReactiveFormTwoComponent } from './forms/reactive-form-two/reactive-form-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormOneComponent,
    TemplateFormTwoComponent,
    ReactiveFormOneComponent,
    ReactiveFormTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ensure this is imported
    AppRoutingModule,  // Ensure this is imported
    RouterModule        // Ensure this is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
