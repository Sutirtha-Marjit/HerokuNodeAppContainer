import { Injectable } from '@angular/core';
import { ToggleActionProp } from '../shared/CustomDataTypes';


@Injectable()
export class CommonImageTrackerService {

  constructor() { }

  generatePath(obj:any):Array<string>{
    var countStr,finalPath:string="";
    var finalPathArray:Array<string> = [];

    for(var count=obj.rangeStart;count<obj.rangeEnd;count++){
        countStr = ""+count;
        if(obj.zeroPattern){
          countStr = (count<10) ? "0"+count : count;
        }        
        finalPath = obj.primaryPath+countStr+obj.secondaryPath;
        finalPathArray.push(finalPath);
    }
    
    return finalPathArray;
  }

  elementToggle(obj:ToggleActionProp){
      var el = <HTMLElement>obj.el;
      
      if(el.classList.contains(obj.class)){
        el.classList.remove(obj.class);
        obj.invoker.classList.remove(obj.class);
      }else{
        el.classList.add(obj.class);
        obj.invoker.classList.add(obj.class);
      }
  }
  


}
