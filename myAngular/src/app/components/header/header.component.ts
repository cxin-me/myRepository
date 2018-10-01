import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  @Input() private paramSub:string;
  @Output() private paramOuter=new EventEmitter();
  constructor() { }

  ngOnInit() {

    console.log(this.paramSub+"(在子组件中执行)")
    this.paramOuter.emit("子组件中的发送广播")
  
  }
 
// clicked=():void=>  


}
