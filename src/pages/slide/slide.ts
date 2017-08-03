import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html'
})
export class SlidePage {
  constructor(public nav: NavController) {}
  pushPage(){
      // Let's navigate from HomePage after first time
      this.nav.push(HomePage);
   }
}
