import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImageListViewComponent } from '../components/image-list-view/image-list-view.component';
import { WelcomePageComponent} from '../components/welcome-page/welcome-page.component';

const routes:Routes = [
  {path:'imagelist',component:ImageListViewComponent},
  {path:'welcome',component:WelcomePageComponent},
  {path:'**',redirectTo:'welcome'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,{useHash:true}
    )
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class ImageDownloaderRoutingModule { }
