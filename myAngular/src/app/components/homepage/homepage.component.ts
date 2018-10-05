import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private paramMain: string;

  @ViewChild('header') private child: any;

  constructor() { }

  ngOnInit() {
    this.paramMain = "主页中的方法";


  }



  paramMethod = msg => {
    // console.log(msg);
    console.log(this.child.paramSub)
  };








}
