import { Injectable } from '@angular/core';

@Injectable()
export class AppPropertiesService {

  constructor() { }

  public static AuthConstants():any{
    return {
      standardAPIDelay:3500,
      signin:'SIGNEDIN',
      signout:'SIGNEDOUT',
      jsPath:'https://apis.google.com/js/platform.js',
      'google-signin-client_id':"1056442085004-uhaouf70lsue1q9meanbd247bfiaqloh.apps.googleusercontent.com"
    };
  }

  public static getRouteConfigObject(){
    
  }

}
