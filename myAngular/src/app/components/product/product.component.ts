import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import * as $ from "jquery";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private todoInfo: String;
  private myList: Array<any>;
  constructor(private localStorageService: LocalStorageService) {

  }
  apptoDo = function (e) {

    if (e.keyCode == 13) {
      if (this.todoInfo != undefined && this.todoInfo != "") {
        var obj = {
          todoInfo: this.todoInfo,
          state: "0"

        }
        this.myList=this.localStorageService.getLocalStorage("list")
        if (this.myList == "" || this.myList == null || this.myList == undefined) {
          this.myList = [];
        }
        this.myList.push(obj)
        this.localStorageService.setLocalStorage("list", this.myList);

      }

    }
  }

  updateState(ind: number, state: string) {
    this.myList[ind].state = state
    this.localStorageService.setLocalStorage("list", this.myList);

  }

  del(ind: number) {
    this.myList.splice(ind, 1);
    this.localStorageService.setLocalStorage("list", this.myList);

  }
  clearStorage(){
    this.localStorageService.clearLocalStorage("list")
  }
  ngOnInit() {
    this.myList=this.localStorageService.getLocalStorage("list")
  }


}
