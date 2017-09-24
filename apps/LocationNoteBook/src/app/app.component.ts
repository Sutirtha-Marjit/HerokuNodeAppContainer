import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AppPropertiesService } from './services/app-properties.service';
import { RouterModule, Routes } from '@angular/router';
import { GoogleProfile} from './shared/datatypes';
import {SignOutActionComponent} from './comps/sign-out-action/sign-out-action.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public CurrentUserProfile:GoogleProfile = null;
  public JourneyCanStart:boolean = false;
  constructor(){
    
  } 

  public onActivate(comp:Component){
    console.log('/////////////////////////////////////////////////');
    console.log(comp);
    console.log('/////////////////////////////////////////////////');
  }

  public onJourneyStart(){
    this.JourneyCanStart = true;
  }

  public onLoginSuccess(gp:GoogleProfile){
    console.log('in app component');
    console.log(gp);
    this.CurrentUserProfile = gp;
  }

  private setGoogleMetaData(){
    var googleMetaTag;
    if(document.querySelectorAll('meta[name="google-signin-client_id"]').length===0){
      googleMetaTag = document.createElement('meta');
      googleMetaTag.setAttribute('name','google-signin-client_id');
      googleMetaTag.setAttribute('content',AppPropertiesService.AuthConstants()["google-signin-client_id"]);
      document.head.appendChild(googleMetaTag);
    }
  }

  ngOnInit(){
    this.setGoogleMetaData();
  }
}
