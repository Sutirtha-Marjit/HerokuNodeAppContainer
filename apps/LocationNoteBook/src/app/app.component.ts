import { Component, Input, Output, EventEmitter} from '@angular/core';
import { AppPropertiesService } from './services/app-properties.service';
import { RouterModule, Routes } from '@angular/router';
import { GoogleProfile} from './shared/datatypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public CurrentUserProfile:GoogleProfile = null;

  constructor(){
    
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
