import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-template-form-one',
  templateUrl: './template-form-one.component.html',
  styleUrls: ['./template-form-one.component.scss']
})
export class TemplateFormOneComponent {
  @ViewChild('registerForm3') registerForm3!: NgForm;

  errorMessage: string = "";
  isSubmited: boolean = false;

  onSubmitRegisterForm1(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = "Pease enter required fields"
      console.warn("Error : ", this.errorMessage);
      return;
    }

    console.log("form1 data..", form.value);

    //This will rest error messag as well
    form.resetForm();
  }


  onSubmitRegisterForm2(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = "Pease enter required fields"
      console.warn("Error : ", this.errorMessage);
      return;
    }
    console.log("form2 data..", form.value);
    form.reset();
  }


  onSubmitRegisterForm3(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = "Pease enter required fields"
      console.warn("Error : ", this.errorMessage);
      return;
    }
    console.log("form3 data..", form.value);
  }


  onSubmitRegisterForm4(form: NgForm) {
    if (!form.valid) {
      this.errorMessage = "Pease enter required fields"
      console.warn("Error : ", this.errorMessage);
      return;
    }
    console.log("form4 data..", form.value);
    // alert("form submited 4")
  }


  // Reset Reg Form 3 using viewchild 
  // Useful for separate function
  resetUsinChild() {
    if (this.registerForm3) {
      // with default remain
      this.registerForm3.resetForm({ passwordf3: '55' });
    }

    // for full reseet without default 
    // if (this.registerForm3) {
    //   this.registerForm3.resetForm();
    // }

  }

}
