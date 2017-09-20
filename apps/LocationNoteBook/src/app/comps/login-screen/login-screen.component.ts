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

   private onGoogleSignIn(googleUser:any){
     
     var RawGoogleProfile = googleUser.getBasicProfile();     
     this.googleProfile.name = RawGoogleProfile.getName();
     this.googleProfile.id = RawGoogleProfile.getId();
     this.googleProfile.image = RawGoogleProfile.getImageUrl();
     this.googleProfile.email = RawGoogleProfile.getEmail();
     this.signin = true;
     this.googleSignPanelClass = "hide signin-panel";

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

      if(!window["onSignIn"]){

         window["onSignIn"] = function(user:any){
           base.onGoogleSignIn(user);
         };

         

      }
    
  }

}
