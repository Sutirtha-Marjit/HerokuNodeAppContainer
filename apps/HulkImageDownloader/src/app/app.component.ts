import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ImageListViewComponent} from './components/image-list-view/image-list-view.component';

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
  currentImgRequestList=[];
  constructor(private router:Router){

  }

  routeComplete(landedComponent){
    if(landedComponent instanceof ImageListViewComponent){
      const c:ImageListViewComponent = landedComponent;
      c.setList(this.currentImgRequestList); 
    }
  }

  populateImageList(){
    this.currentImgRequestList=[];
    const arr=[];
    const crval = this.frmGroup.value;
    for(let i=crval.startIndex;i<crval.endIndex;i++){
      let p=`${i}`;
      if(crval.startWithZero && i<10){
        p = `0${i}`;
      }
      arr.push(`${crval.segmentOne}${p}${crval.segmentTwo}`);
    }
    this.currentImgRequestList=arr;
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
      endIndex:12,
      startWithZero:true
    })
  }

  ngOnInit(){
    const mainURL = new FormControl();
    const segmentOne = new FormControl();
    const segmentTwo = new FormControl();
    const startIndex = new FormControl();
    const endIndex = new FormControl();
    const startWithZero = new FormControl();
    
    this.frmGroup = new FormGroup({
      mainURL:mainURL,
      segmentOne:segmentOne,
      segmentTwo:segmentTwo,
      startIndex:startIndex,
      endIndex:endIndex,
      startWithZero:startWithZero
    });
    this.setDefaultValue();
    this.frmGroup.valueChanges.subscribe((event)=>{
        this.url = event.mainURL;
    })
    
  }

}
