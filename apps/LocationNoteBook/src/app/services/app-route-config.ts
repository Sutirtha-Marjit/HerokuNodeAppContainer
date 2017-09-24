import { LoginScreenComponent } from '../comps/login-screen/login-screen.component';
import { HomeScreenComponent } from '../comps/home-screen/home-screen.component';
import { RouterModule, Routes } from '@angular/router';

export class AppRouteConfig {

      public static getRouteConfigObject():any{
            const appRouterConfig:Routes =[
            {  path: 'welcome', component: HomeScreenComponent }
            
            ];

            return appRouterConfig;
        }

}
