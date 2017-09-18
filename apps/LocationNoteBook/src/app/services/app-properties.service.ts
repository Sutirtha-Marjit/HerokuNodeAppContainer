import { Injectable } from '@angular/core';

@Injectable()
export class AppPropertiesService {

  constructor() { }

  public static AuthConstants():any{
    return {
      signin:'SIGNEDIN',
      signout:'SIGNEDOUT'
    };
  }

}
