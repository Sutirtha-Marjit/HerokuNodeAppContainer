import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-broke-text',
  templateUrl: './broke-text.component.html',
  styleUrls: ['./broke-text.component.css']
})
export class BrokeTextComponent implements OnInit {

  @Input() url='';
  @Output() urlSegmentDone:EventEmitter<{segmentOne:string,segmentTwo:string}> = new EventEmitter(); 
  private innerURL='';
  constructor() { }

  ngOnInit() {
  }

  equalsToSlash(ch){
    const slash = '/';
    return ch===slash;
  }
  
  divide(d){
    let p1 = this.innerURL.substring(0,d);
    p1 = `${this.url.split(p1)[0]}${p1}`;
    const obj = {
      segmentOne:p1,
      segmentTwo:this.innerURL.substring(d+1,this.innerURL.length)
    };
    this.urlSegmentDone.emit(obj);
  }
  getLinkableArray(){
    this.innerURL='';
    const arr=[];
    let hostName='';
    let fStr='';
    if(this.url){
      hostName = this.getHostName(this.url);
      //console.log(this.url.split(hostName)[1]);
      fStr = this.url.split(hostName)[1];
    }

    if(fStr && fStr.length){
      for(let i=0;i<fStr.length;i++){
        arr.push(fStr.charAt(i));
      }
      this.innerURL = fStr;
    }
    return arr;
  }

  getHostName(url) {
    const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}

  getDomain(url) {
    const hostName = this.getHostName(url);
    let domain = hostName;
    
    if (hostName != null) {
        var parts = hostName.split('.').reverse();
        
        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];
                
            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
              domain = parts[2] + '.' + domain;
            }
        }
    }
    
    return domain;
}

}
