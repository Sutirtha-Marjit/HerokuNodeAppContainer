import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonImageTrackerService} from './services/common-image-tracker.service';

import { AppComponent } from './app.component';
import { ImageGridComponent } from './comps/image-grid/image-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
   CommonImageTrackerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
