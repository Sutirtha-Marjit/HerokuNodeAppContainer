import { Component, OnInit , Output, EventEmitter, ViewChildren,QueryList} from '@angular/core';
import { AppPropertiesService } from '../../services/app-properties.service';
import { GoogleProfile,PreloaderInitEvent} from '../../shared/datatypes';
import {CommonPreloaderComponent} from '../common-preloader/common-preloader.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  @ViewChildren(CommonPreloaderComponent) preloaders:QueryList<CommonPreloaderComponent>;
  @Output()loginSuccess:EventEmitter<GoogleProfile> = new EventEmitter<GoogleProfile>();
  @Output()onJourneyStart:EventEmitter<GoogleProfile> = new EventEmitter<GoogleProfile>();

  compName:string = "LoginScreenComponent";
  googleSignPanelClass:string = "signin-panel";
  loginAppearClass:string = "";
  eventFromSigninButton:boolean = false;
  eventFromAppStartButton:boolean = false;
  signin:boolean = false;
  decided:boolean = false;
  countdownPreloaderComp:CommonPreloaderComponent;
  googleProfile:GoogleProfile = { name:'', id:'', image:'', email:'' };
  GAPI:any = {};

  constructor() {
    this.signin = (window["GOOGLE-AUTH-STATUS"]===AppPropertiesService.AuthConstants().signin);
   }

   public homeScreenKikOff(e:any){
     console.log(e);
     if(!this.eventFromAppStartButton){
       this.onJourneyStart.emit(this.googleProfile);
     }
     
     if(e==="fromStartButton"){
       this.eventFromAppStartButton = true;
     }
     
   }

   public onCountDownPreloaderReay(e:PreloaderInitEvent){
     e.currentTarget.startCountDown();
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
     if(this.eventFromSigninButton){
       window.location.reload();
     }else{
       console.log('Emiting event "loginSuccess"');
       this.loginSuccess.emit(this.googleProfile);
       console.log(this.preloaders.toArray());
     }
     
     
   }
   
   private createGoogleScript(){
     var base = this;
      this.GAPI = window['gapi'];
        var GoogleAuthObject,jstag,scripts = document.querySelectorAll('[data-dyn-script="location-note-book"]');
        if(!scripts.length && !this.GAPI){
           
          jstag = document.createElement('script');
          jstag.setAttribute('async','');
          jstag.setAttribute('defer','');
          jstag.setAttribute('data-dyn-script','location-note-book');
          document.body.appendChild(jstag);
          jstag.src = AppPropertiesService.AuthConstants().jsPath;
            setTimeout(()=>{
              
              this.GAPI = window['gapi'];
              GoogleAuthObject = this.GAPI.auth2.init();
              GoogleAuthObject.then(()=>{
                var btn = document.querySelector('*[class *="RioButtonContentWrapper"]');
                btn.addEventListener('click',()=>{
                 base.eventFromSigninButton = true; 
                })
              })
              
              
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

         

         

      }
    
  }

}
