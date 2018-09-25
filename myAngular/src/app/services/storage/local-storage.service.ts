import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(key:string,val:any){
    localStorage.setItem(key,JSON.stringify(val))
  }

  getLocalStorage(key:string):any{
    var obj=localStorage.getItem(key);
    if(obj!=null||obj!=""||obj!=undefined){
      return JSON.parse(obj);
    }else{
      return "";
    }
  }
  clearLocalStorage(key:string){
    localStorage.removeItem(key)
  }
}
