import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { GeneralService } from './general.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ImageListViewComponent} from './components/image-list-view/image-list-view.component';
import {ZippingDialogComponent} from './components/zipping-dialog/zipping-dialog.component';

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
  selectionList=[];
  zipProgress=false;
  zipData = [];
  constructor(
    private router: Router,
    private gs: GeneralService,
    private dialog: MatDialog
  ) {

  }

  routeComplete(landedComponent){
    if(landedComponent instanceof ImageListViewComponent){
      const c:ImageListViewComponent = landedComponent;
      c.setList(this.currentImgRequestList); 
      c.onSelectionUpdate.subscribe((list:Array<string>)=>{
        this.selectionList = list;
      })
    }
  }

  zipRequest(){
    if(this.selectionList){
      this.zipProgress = true;
      const arr=[];
      this.selectionList.forEach((el)=>{
        arr.push(el.url);
      });
      this.gs.postZipRequest(arr).subscribe((zipData:any)=>{
       
        this.zipProgress=false;
        this.zipData.push({
          time:(new Date()),
          url:`${this.gs.getServerURl()}/${zipData.data.zip}`,
          name:'zip'
        })
        
      },(error)=>{
        console.log(error);
      })
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
