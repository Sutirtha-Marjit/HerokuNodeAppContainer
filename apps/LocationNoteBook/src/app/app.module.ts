import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './comps/login-screen/login-screen.component';
import { CommonPreloaderComponent } from './comps/common-preloader/common-preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CommonPreloaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
