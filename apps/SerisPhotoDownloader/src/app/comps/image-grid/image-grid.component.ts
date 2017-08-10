import { Component, OnInit } from '@angular/core';
import {CommonImageTrackerService} from '../../services/common-image-tracker.service';
import {ImageObjectElement} from '../../shared/CustomDataTypes';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {
  public linkArray:Array<string>=[];
  public imageArray=[];
  public imageObjectCollection:Array<ImageObjectElement>=[];
  private linkPad:HTMLDivElement;
  private linkPadMenu:HTMLElement;
  constructor(private imageTrckerService:CommonImageTrackerService) {
      
   }

  ngOnInit() {
    this.linkPad = <HTMLDivElement>document.getElementById("linkpad");
    this.linkPadMenu = document.getElementById('linkPadOpener');
  }

  private loadProcessEventListener(e:Event){
      
      var imobj:ImageObjectElement = this.imageObjectCollection[(<HTMLImageElement>e.currentTarget).getAttribute('data-index')];
      

      if(e.type==="error"){
          imobj.exists = false;
      }

      if(e.type==="load"){
        imobj.exists = true;
        imobj.width =  imobj.image.width;
        imobj.height = imobj.image.height;
        console.log('LOADED');
        console.log(imobj);
      }

      this.imageObjectCollection[(<HTMLImageElement>e.currentTarget).getAttribute('data-index')] = imobj;
      console.log(this.imageObjectCollection);
  }

  imagePropertyInject(path:string,index:number):HTMLImageElement{
        var base = this;
        var tempImg = new Image();
        tempImg.id = index+"_img_"+(new Date()).getTime();
        tempImg.setAttribute('data-index',''+index); 
        tempImg.onload = function(e:Event){  
          
          base.loadProcessEventListener(e);
        
        };
        tempImg.onerror = function(e:Event){  
          
          base.loadProcessEventListener(e);
        
        };
        tempImg.setAttribute("src",path);

        return <HTMLImageElement>tempImg;
  }

  populateImages(){
    var base = this;
    base.imageObjectCollection = [];
    base.linkArray.forEach(function(path,index){
        var img = base.imagePropertyInject(path,index);
        base.imageObjectCollection.push({
          path:path,
          image:img,
          width:0,
          height:0,
          exists:false
        });
    });
    
  }

 cleanGrid(){
   this.linkArray=[];
   this.imageArray=[];
   this.imageObjectCollection=[];
 }

  toggleLinkPad(){
      
      this.linkPad = <HTMLDivElement>document.getElementById("linkpad");
      this.linkPadMenu = document.getElementById('linkPadOpener');

      this.imageTrckerService.elementToggle({
        el:this.linkPad,
        class:'open',
        invoker:this.linkPadMenu
      });
  }

}
