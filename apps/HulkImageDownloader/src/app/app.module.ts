import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ImageDownloaderRoutingModule} from './image-downloader-routing/image-downloader-routing.module';
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
        MatGridListModule,
        MatTooltipModule,
        MatDialogModule
        } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrokeTextComponent } from './components/broke-text/broke-text.component';
import { ImageViewObjectComponent } from './components/image-view-object/image-view-object.component';
import { ImageListViewComponent } from './components/image-list-view/image-list-view.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ZippingDialogComponent } from './components/zipping-dialog/zipping-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokeTextComponent,
    ImageViewObjectComponent,
    ImageListViewComponent,
    WelcomePageComponent,
    ZippingDialogComponent
  ],
  imports: [    
    ImageDownloaderRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
   // MatSidenavModule
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
