import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder) {
    this.loginForm = this.createFormGroupWithFormBuilder();
    // this.loginForm = this.createFormGroup();
  };

  createFormGroupWithFormBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      username: 'username',
      password: 'password'
    });
  }

  // createFormGroup() {
  //   return new FormGroup({
  //     username: new FormControl(),
  //     password: new FormControl()
  //   })
  // }

  onSubmit() {
    const result: LoginRequest = Object.assign({}, this.loginForm.value);

    console.log(result);
  }

  ngOnInit() { };

}
