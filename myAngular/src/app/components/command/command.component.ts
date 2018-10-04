import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  private mycase:string;

  private cssBorder:any;
  private cssBorderWidth:any;
  private cssList:Array<string>=[];
  constructor() {
    this.cssBorder='border-color'
    this.cssBorderWidth={'border-width':true}
    this.cssList.push('border-color')
    this.cssList.push('border-width')
   }

  ngOnInit() {
this.mycase="b"
  }

}
