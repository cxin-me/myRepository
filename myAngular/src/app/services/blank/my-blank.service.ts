import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyBlankService {

  constructor() { }


  isBlank(ele:any):any{
    if(ele!=null&&ele!=""&&ele!=undefined){
      return ele;
    }else{
      console.log("字符异常======》字符为 "+ele)
      return "";
    }
  }
}
