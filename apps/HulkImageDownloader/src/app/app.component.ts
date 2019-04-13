import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  url='';
  frmGroup:FormGroup = null;
  consoleOpen = true;
  constructor(){

  }

  setSegments(obj){
    this.frmGroup.setValue(Object.assign(this.frmGroup.value,obj));
    
  }

  toggleConsoleOpen($event){
    this.consoleOpen = $event.checked;
  }

  setDefaultValue(){
    this.frmGroup.setValue({
      mainURL:'',
      segmentOne:'',
      segmentTwo:'',
      startIndex:1,
      endIndex:12
    })
  }

  ngOnInit(){
    const mainURL = new FormControl();
    const segmentOne = new FormControl();
    const segmentTwo = new FormControl();
    const startIndex = new FormControl();
    const endIndex = new FormControl();
    
    this.frmGroup = new FormGroup({
      mainURL:mainURL,
      segmentOne:segmentOne,
      segmentTwo:segmentTwo,
      startIndex:startIndex,
      endIndex:endIndex
    });
    this.setDefaultValue();
    this.frmGroup.valueChanges.subscribe((event)=>{
        this.url = event.mainURL;
    })
    
  }

}
