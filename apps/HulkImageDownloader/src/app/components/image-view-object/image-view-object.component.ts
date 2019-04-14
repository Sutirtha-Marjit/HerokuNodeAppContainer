import { Component, OnInit ,Input,Output, EventEmitter, ViewChild} from '@angular/core';
import { TooltipPosition} from '@angular/material';
@Component({
  selector: 'app-image-view-object',
  templateUrl: './image-view-object.component.html',
  styleUrls: ['./image-view-object.component.css']
})
export class ImageViewObjectComponent implements OnInit {

  preloaderOn=true;
  errorBlock=false;
  //@Input() imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYh8ihrvMk1-x1XzNRvfvW85P0SV0IEoQx5mWSw1q3_AlO5g1z';
  @Input() imgURL='https://bit.ly/2G9v3oc';
  @Output() onChoose = new EventEmitter<ImageSelectedItem>();
  @ViewChild('mainImage') mainImage;
  dimension  = {w:0,h:0};
  position:TooltipPosition = null;
  constructor() { 
    this.position = 'above';
  }

  getPreloaderStyle(){
    return {
      opacity:(this.preloaderOn ? 1:0)
    };
  }
  getErrorBlockStyle(){
    return {
      opacity:(this.errorBlock ? 1:0)
    };
  }

  onLoad(){
    this.preloaderOn = false;
    const img:HTMLImageElement = this.mainImage.nativeElement;
    console.log(img.naturalWidth);
    this.dimension.w = img.naturalWidth;
    this.dimension.h = img.naturalHeight;
  }

  onError(){
    console.log('error');
    this.errorBlock=true;
  }

  onChooseAction(event){
    if(true){
      this.onChoose.emit({
        url:this.imgURL,
        name:'',
        added:event.checked
      });
    }
  }

  ngOnInit() {
  }

}

export interface ImageSelectedItem{
  url:string;
  name?:string;
  added?:boolean
};