import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Biglietto } from './biglietto';

@NgModule({
  declarations: [
    Biglietto,
  ],
  imports: [
    IonicPageModule.forChild(Biglietto),
  ],
  exports: [
    Biglietto
  ]
})
export class BigliettoModule {}
