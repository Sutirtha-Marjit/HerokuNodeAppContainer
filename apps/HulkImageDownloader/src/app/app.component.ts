import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  url='';
  frmGroup:FormGroup = null;
  consoleOpen = false;
  constructor(private router:Router){

  }

  populateImageList(){
    this.consoleOpen = false;
    this.router.navigateByUrl('imagelist');
  }

  setSegments(obj){
    this.frmGroup.setValue(Object.assign(this.frmGroup.value,obj));
    
  }

  toggleConsoleOpen($event){
    this.consoleOpen = $event.checked;
    if(this.consoleOpen){
      this.router.navigateByUrl('welcome');
    }
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
