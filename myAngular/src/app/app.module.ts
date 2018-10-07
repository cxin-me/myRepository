import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //表单模块
import { HttpModule, JsonpModule } from '@angular/http'; //请求模块
import { RouterModule ,Routes,ActivatedRoute} from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { LocalStorageService } from './services/storage/local-storage.service';
import { MyBlankService } from './services/blank/my-blank.service';
import { HttpDataComponent } from './components/postData/http-data/http-data.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CommandComponent } from './components/command/command.component';
import { FormComponent } from './components/form/form.component';
import { DiComponent } from './components/di/di.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'command', component: CommandComponent },
  { path: 'form', component: FormComponent },
  { path: 'di', component: DiComponent },
  { path: 'other', redirectTo: 'form' },
  ];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HttpDataComponent,
    HomepageComponent,
    HeaderComponent,
    CommandComponent,
    FormComponent,
    DiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // LocalStorageService,
    //  MyBlankService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
