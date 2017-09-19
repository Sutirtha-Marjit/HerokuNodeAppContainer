import { Component, OnInit } from '@angular/core';
import { AppPropertiesService } from '../../services/app-properties.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  signin:boolean = false;
  GAPI:any = {};
  constructor() {
    this.signin = (window["GOOGLE-AUTH-STATUS"]===AppPropertiesService.AuthConstants().signin);
   }
   
   private createGoogleScript(){
      this.GAPI = window['gapi'];
        var jstag,scripts = document.querySelectorAll('[data-dyn-script="location-note-book"]');
        if(!scripts.length && !this.GAPI){
        
          jstag = document.createElement('script');
          jstag.setAttribute('data-dyn-script','location-note-book');
          document.body.appendChild(jstag);
          jstag.src = AppPropertiesService.AuthConstants().jsPath;
            setTimeout(()=>{
              this.GAPI = window['gapi'];
              var dx = this.GAPI.auth2.init({
                client_id:AppPropertiesService.AuthConstants()['google-signin-client_id']
              })

              console.log(dx.isSignedIn);

            },AppPropertiesService.AuthConstants().standardAPIDelay);
          
          }else{
            alert('available');
          }
      
      
      
   }
  

  ngOnInit() {
    
    this.createGoogleScript();
    
  }

}
