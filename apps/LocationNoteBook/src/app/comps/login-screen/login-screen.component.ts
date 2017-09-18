import { Component, OnInit } from '@angular/core';
import { AppPropertiesService } from '../../services/app-properties.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  signin:boolean = false;
  action = "Login test";
  constructor() {
    this.signin = (window["GOOGLE-AUTH-STATUS"]===AppPropertiesService.AuthConstants().signin);
   }

  ngOnInit() {
    var base=this;
    window["SigninAction"] = function(){
      alert(base.action);
    };
  }

}
