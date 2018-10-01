import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private paramMain:string;

  constructor() { }

  ngOnInit() {
    this.paramMain="主页中的方法";
  }



  paramMethod=msg=>console.log(msg);
  







}
