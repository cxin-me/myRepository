import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 myform: FormGroup;
  testForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.testForm = fb.group({
      "email": ["", Validators.required],
      "pwd": ["", Validators.compose([
        Validators.required,this.pwdValid
      ])]
      // "ck": [true],
    })
  }

  pwdValid = myct => {
    if (myct.value.length> 6) {
          return {pwdValidCk:true}
    }
  }

  ngOnInit() {
  }

  // onSubmit = form => {
  //   console.log(form)
  // }
  // onMySubmit=form=>{

  //   console.log(form)
  // }
  onTestSubmit = form => {
    console.log(form.controls['email'].hasError('required'))
    console.log(form.controls['pwd'].hasError('pwdValidCk'))
    console.log(form.invalid)
  }
}
