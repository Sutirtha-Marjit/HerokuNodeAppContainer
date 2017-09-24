import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AppRouteConfig} from './services/app-route-config';
import { AppPropertiesService } from './services/app-properties.service';
import { LoginScreenComponent } from './comps/login-screen/login-screen.component';
import { CommonPreloaderComponent } from './comps/common-preloader/common-preloader.component';
import { HomeScreenComponent } from './comps/home-screen/home-screen.component';
import { SignOutActionComponent } from './comps/sign-out-action/sign-out-action.component';

//const appRouterConfig = AppRouteConfig.getRouteConfigObject();
const appRouterConfig:Routes =[
            {  path: 'welcome', component: HomeScreenComponent }
            
            ];

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CommonPreloaderComponent,
    HomeScreenComponent,
    SignOutActionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('APP main module started');
  }
  
}
