import { Component, OnInit } from '@angular/core';
import { AppPropertiesService } from '../../services/app-properties.service';
import { GoogleProfile} from '../../shared/datatypes';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  googleSignPanelClass:string = "signin-panel";
  loginAppearClass:string = "";
  eventFromSigninButton:boolean = false;
  signin:boolean = false;
  decided:boolean = false;
  googleProfile:GoogleProfile = { name:'', id:'', image:'', email:'' };
  GAPI:any = {};
  constructor() {
    this.signin = (window["GOOGLE-AUTH-STATUS"]===AppPropertiesService.AuthConstants().signin);
   }

   public onGooogleSignOut(){
     var RawAuthObj = this.GAPI.auth2.getAuthInstance();
     RawAuthObj.signOut().then(()=>{
       this.googleSignPanelClass = "signin-panel";
       this.signin = false;
     });
   }

   private onGoogleSignInSuccess(googleUser:any){
     
     var RawGoogleProfile = googleUser.getBasicProfile();     
     this.googleProfile.name = RawGoogleProfile.getName();
     this.googleProfile.id = RawGoogleProfile.getId();
     this.googleProfile.image = RawGoogleProfile.getImageUrl();
     this.googleProfile.email = RawGoogleProfile.getEmail();
     this.googleSignPanelClass = "hide signin-panel";
     console.log('onGoogleSignIn');
     this.signin = true;
     console.log('this.signin:'+this.signin);
     
     
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
              
              this.GAPI.auth2.init({
                client_id:AppPropertiesService.AuthConstants()['google-signin-client_id']
              });
              
              this.loginAppearClass = "appear";
              
            },AppPropertiesService.AuthConstants().standardAPIDelay);
          
          }else{
            alert('available');
          }
      
      
      
   }
  

  ngOnInit() {
    var base = this;
    base.createGoogleScript();
      console.log('LoginScreen-init');
      if(!window["onSignInSuccess"]){
         
         window["onSignInSuccess"] = function(user:any){
           base.onGoogleSignInSuccess(user);
         };

         window["onSignIn"] = function(){
           base.eventFromSigninButton = true;
           alert('ok');
         };

         

      }
    
  }

}
