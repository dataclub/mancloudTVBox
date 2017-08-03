import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BasicPage } from './basic';

@NgModule({
  declarations: [
    BasicPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicPage),
  ],
  entryComponents: [
    BasicPage,
  ]
})
export class BasicModule {}