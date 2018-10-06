import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; //表单模块
import {  HttpModule, JsonpModule } from '@angular/http'; //请求模块
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { LocalStorageService } from './services/storage/local-storage.service';
import { MyBlankService } from './services/blank/my-blank.service';
import { HttpDataComponent } from './components/postData/http-data/http-data.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CommandComponent } from './components/command/command.component';
import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HttpDataComponent,
    HomepageComponent,
    HeaderComponent,
    CommandComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService,MyBlankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
