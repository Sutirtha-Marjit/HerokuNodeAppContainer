import { Component, OnInit , ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CommonImageTrackerService} from './services/common-image-tracker.service';
import {ImageGridComponent} from './comps/image-grid/image-grid.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private rangeDefault:any = {start:1,end:12}; 
  private consoleEl:HTMLDivElement;  
  private consoleMenu:HTMLElement;
  public formgrp:FormGroup;
  public linkArray:Array<string>=[];
  
 @ViewChild(ImageGridComponent)private imageGridComponent:ImageGridComponent;
  constructor(private imageTrckerService:CommonImageTrackerService){ 

    this.formgrp = new FormGroup({
      pPath: new FormControl(''),
      sPath: new FormControl(''),
      zeroPattern: new FormControl(''),
      rangeStart: new FormControl(this.rangeDefault.start),
      rangeEnd : new FormControl(this.rangeDefault.end)
    });
    
  }

  private rangeFilter(){
    var st,ed;
    st = this.formgrp.controls["rangeStart"].value;
    ed = this.formgrp.controls["rangeEnd"].value;

    if(st>ed){
      this.formgrp.controls["rangeStart"].setValue(ed);
      this.formgrp.controls["rangeEnd"].setValue(st);
    }

  };

  onSubmit(){
   this.linkArray = [];
   this.imageGridComponent.linkArray = this.linkArray;
   this.imageGridComponent.populateImages();
   this.rangeFilter();   

  this.linkArray =  this.imageTrckerService.generatePath({
      primaryPath:this.formgrp.controls["pPath"].value,
      secondaryPath:this.formgrp.controls["sPath"].value,
      zeroPattern:this.formgrp.controls["zeroPattern"].value,
      rangeStart:this.formgrp.controls["rangeStart"].value,      
      rangeEnd:this.formgrp.controls["rangeEnd"].value
    });
    this.imageGridComponent.linkArray = this.linkArray;
    this.imageGridComponent.populateImages();
    this.menuToggle();
  }

  ngOnInit(){

    this.consoleEl = <HTMLDivElement>document.querySelector('.console');
    this.consoleMenu = document.getElementById('menu-opener');

  }

  menuToggle(){
      this.imageTrckerService.elementToggle({el:this.consoleEl,class:'open',invoker:this.consoleMenu});
  }
  

  


  title = 'app works!';
}
