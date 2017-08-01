import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CommonImageTrackerService} from './services/common-image-tracker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private consoleEl:HTMLDivElement;  
  public formgrp:FormGroup;
  constructor(private imageTrckerService:CommonImageTrackerService){ 

    this.formgrp = new FormGroup({
      pPath: new FormControl(''),
      sPath: new FormControl(''),
      zeroPattern: new FormControl(''),
      rangeStart: new FormControl('1'),
      rangeEnd : new FormControl('12')
    });
    
  }

  onSubmit(){
   console.log(this.imageTrckerService.generatePath);

   this.imageTrckerService.generatePath({
      primaryPath:this.formgrp.controls["pPath"].value,
      secondaryPath:this.formgrp.controls["sPath"].value,
      zeroPattern:this.formgrp.controls["zeroPattern"].value,
      rangeStart:this.formgrp.controls["rangeStart"].value,      
      rangeEnd:this.formgrp.controls["rangeEnd"].value
    });
    
  }

  ngOnInit(){

    this.consoleEl = <HTMLDivElement>document.querySelector('.console');

  }

  menuToggle(){

    if(this.consoleEl.classList.contains('open')){
       this.consoleEl.classList.remove('open');
    }else{
      this.consoleEl.classList.add('open');
    }

  }
  

  


  title = 'app works!';
}
