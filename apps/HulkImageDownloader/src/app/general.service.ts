import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  
  private zipRequestURL="api/common/service/imageserisloader/";
  constructor(private http:HttpClient) { }

  public getServerURl():string{
    return environment.serverURL;
  }

  public postZipRequest(paths:Array<string>){
    const url = `${this.getServerURl()}/${this.zipRequestURL}`;
    const headers = new HttpHeaders({
      'Content-type':'application/json',
      'Application': 'HulkImageDownloader'
    });
    
    return this.http.post(url,{imageList:paths},{headers:headers});
  }
}
