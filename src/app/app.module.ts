import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';


import { mancloudTVBox } from './app.component';
import { SlidePage } from '../pages/slide/slide';
import { HomePage } from '../pages/home/home';
import { BasicModule } from '../pages/basic/basic.module';

import { ApiProvider } from '../providers/api/api';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    mancloudTVBox,
    SlidePage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(mancloudTVBox),
    IonicStorageModule.forRoot(),
    HttpModule,
    BasicModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    mancloudTVBox,
    SlidePage,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
