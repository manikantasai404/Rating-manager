import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { CommonService } from 'src/app/services/common.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SigningComponent implements OnInit {

  employeeLoginForm!: FormGroup;
  showPassword = false;

  constructor(private form: FormBuilder,
    public toaster: ToasterService,
    public common_service: CommonService,
    public _snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.employeeLoginForm = this.form.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', Validators.required)

    });
  }

  passwordToggle() {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
  }

  signIn() {

    // this.toaster.open("Successfully logged in",'success')
    


    let page_validity = true, diaplay_message = '';
    page_validity = page_validity && this.employeeLoginForm.valid;

    if (!page_validity) {
      diaplay_message = this.common_service.getValidationMessage(this.employeeLoginForm.controls);
      this._snackBar.open(diaplay_message, 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
        panelClass:['errorSnackbar']
      });
      console.log(diaplay_message);
      return;
    }

    if (page_validity) {
      this.signApi();
    }
  }

  cancel(){
    this.employeeLoginForm.patchValue({
      email: '',
      password:''
    })
  }

  signApi() {
    if (this.employeeLoginForm.value.email == 'manikanta.sai@neutrinos.co' && this.employeeLoginForm.value.password == '123456') {
      console.log("Go in")
      this.router.navigateByUrl(`/home`);
    } else {
      console.log("Fuck up");
    }
  }

}
