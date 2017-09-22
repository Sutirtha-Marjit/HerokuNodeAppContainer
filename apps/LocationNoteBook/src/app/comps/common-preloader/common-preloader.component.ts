import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { AppPropertiesService } from '../../services/app-properties.service';
import { PreloaderInitEvent } from '../../shared/datatypes';

@Component({
  selector: 'app-common-preloader',
  templateUrl: './common-preloader.component.html',
  styleUrls: ['./common-preloader.component.css']
})
export class CommonPreloaderComponent implements OnInit {

  @Input() preloaderType:string;
  @Output() countDownEnd:EventEmitter<string> = new EventEmitter();
  @Output() countDownCompReady:EventEmitter<PreloaderInitEvent> = new EventEmitter();
  
  cntIntervalID = null;
  countOfCountDown=0;
  maxCountDown:number = AppPropertiesService.getPreloaderConfig().maxPreloaderCountDown;

  constructor() { 

  }
  
  public startCountDown(){
    
    this.cntIntervalID = setInterval(()=>{
      this.countOfCountDown --;
      if(this.countOfCountDown===0){
        this.countDownEnd.emit('countDownEnd');
        clearInterval(this.cntIntervalID);
      }
    },1000);
  }

  ngOnInit() {
   this.countOfCountDown = this.maxCountDown;
   if(this.preloaderType==="countdown"){
     this.countDownCompReady.emit({desc:'',currentTarget:this});
   }
  }

}
