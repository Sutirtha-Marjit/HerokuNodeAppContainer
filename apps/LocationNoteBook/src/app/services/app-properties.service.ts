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
      'google-signin-client_id':"1056442085004-bpm9f77rfknv4f8i20te08uk2u0s3rcg.apps.googleusercontent.com"
    };
  }

  public static getPreloaderConfig():any{
    return {
      maxPreloaderCountDown:10
    };
  }

  public static getRouteConfigObject(){
    
  }

}
