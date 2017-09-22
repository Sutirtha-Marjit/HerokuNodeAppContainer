import {CommonPreloaderComponent} from '../comps/common-preloader/common-preloader.component';

export interface GoogleProfile{
    name:string,
    id:string,
    image:string,
    email:string
}

export interface PreloaderInitEvent{
    desc:string,
    currentTarget:CommonPreloaderComponent
}