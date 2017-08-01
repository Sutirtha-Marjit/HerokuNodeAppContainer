import { Injectable } from '@angular/core';

@Injectable()
export class CommonImageTrackerService {

  constructor() { }

  generatePath(obj:any):string{
    var finalPath:string="";
    console.log(JSON.stringify(obj));
    
    return finalPath;
  }

  


}
