import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out-action',
  templateUrl: './sign-out-action.component.html',
  styleUrls: ['./sign-out-action.component.css']
})
export class SignOutActionComponent implements OnInit {
  private GAPI=null;
  constructor() { }

  public onSignOutButtonClick(){
     this.GAPI = window["gapi"];
     var RawAuthObj = this.GAPI.auth2.getAuthInstance();
     RawAuthObj.signOut().then(()=>{
       
     });
  }

  ngOnInit() {

  }

}
