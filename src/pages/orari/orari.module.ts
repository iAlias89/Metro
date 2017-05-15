import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Orari } from './orari';

@NgModule({
  declarations: [
    Orari,
  ],
  imports: [
    IonicPageModule.forChild(Orari),
  ],
  exports: [
    Orari
  ]
})
export class OrariModule {}
