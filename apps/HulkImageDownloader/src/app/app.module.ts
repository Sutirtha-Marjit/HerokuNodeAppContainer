import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//import {MatSidenavModule} from '@angular/material/sidenav';
import {
        MatButtonModule, 
        MatMenuModule,
        MatCheckboxModule, 
        MatSlideToggleModule,
        MatFormFieldModule, 
        MatInputModule,
        MatCommonModule,
        
        } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrokeTextComponent } from './components/broke-text/broke-text.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokeTextComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
   // MatSidenavModule
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
