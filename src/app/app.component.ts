import { Component, ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';

import { SlidePage } from '../pages/slide/slide';
import { HomePage } from '../pages/home/home';
import { BasicPage } from '../pages/basic/basic';

@Component({
  templateUrl: 'app.html'
})
export class mancloudTVBox {
  @ViewChild('content') nav: NavController
  public rootPage;
  
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    storage: Storage,
    device: Device
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      /*
alert('Device UUID is: ' + device.uuid);
alert('Device plattform is: ' + device.platform);
alert('Device cordova is ' + device.cordova);
alert('Device cordova is ' + device.model);
alert('Device cordova is ' + device.version);
alert('Device cordova is ' + device.manufacturer);
alert('Device cordova is ' + device.isVirtual);
alert('Device cordova is ' + device.serial);
*/
      var firstLoadVar = 'firstLoad';
      storage.get(firstLoadVar).then(firstLoad => {
           if (firstLoad == null) {
              this.nav.setRoot(SlidePage);
              storage.set(firstLoadVar, true);
           } else {
             this.nav.setRoot(HomePage);
           }
       });
    });
  }
  
}


