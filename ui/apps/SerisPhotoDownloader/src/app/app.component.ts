import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private consoleEl:HTMLDivElement;  
  public formgrp:FormGroup;
  constructor(){   
    this.formgrp = new FormGroup({
      pPath: new FormControl(''),
      sPath: new FormControl(''),
      zeroPattern: new FormControl('')
    });
    
  }

  onSubmit(){
    this.formgrp.controls["pPath"].value
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
