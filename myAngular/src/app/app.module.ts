import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; //表单模块
import {  HttpModule, JsonpModule } from '@angular/http'; //表单模块
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { LocalStorageService } from './services/storage/local-storage.service';
import { MyBlankService } from './services/blank/my-blank.service';
import { HttpDataComponent } from './components/postData/http-data/http-data.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HttpDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [LocalStorageService,MyBlankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
