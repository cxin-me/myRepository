import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myform:FormGroup


  constructor(fb:FormBuilder) {
    this.myform=fb.group({
      "email":["my@qq.com"],
      "pwd":["abc123"],
      "ck":[true]
    })
   }

  ngOnInit() {
  }

  onSubmit = form => {
    console.log(form)
  }
  onMySubmit=form=>{

    console.log(form)
  }

}
