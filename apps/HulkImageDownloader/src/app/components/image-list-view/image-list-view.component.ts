import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { ImageSelectedItem} from '../image-view-object/image-view-object.component';

@Component({
  selector: 'app-image-list-view',
  templateUrl: './image-list-view.component.html',
  styleUrls: ['./image-list-view.component.css']
})
export class ImageListViewComponent implements OnInit {

  @Output() onSelectionUpdate = new EventEmitter<Array<string>>();
  constructor(private ngZone:NgZone) {
    const list = window.sessionStorage.getItem('list');
    if(list){
      this.list = JSON.parse(list);
    }
  }
  list:Array<any> = [];
  selectionList = [];
  ngOnInit() {
  }
  
  onChoose(obj:ImageSelectedItem):void{
    
    const $index = this.selectionList.findIndex((el:ImageSelectedItem)=>{
      return el.url === obj.url;
    });
    if(obj.added && $index===-1){
      this.selectionList.push(obj);
    }
    if(!obj.added && $index>-1){
      this.selectionList.splice($index,1);
    }

    console.log(this.selectionList);
    this.onSelectionUpdate.emit(this.selectionList);
  }

  setList(newList:Array<any>){
    this.ngZone.run(()=>{
      this.list = newList;
      window.sessionStorage.setItem('list',JSON.stringify(this.list));
    });
  }

}
