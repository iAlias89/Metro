import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Orari page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-orari',
  templateUrl: 'orari.html',
})
export class Orari {
  zone: any;
  modeKeys: any;
  zone1: any;
  modeKeys1: any;
 
   place: any;
   destinazione: any;
   stazioni: any;
   orarioPrimary: any;
   orarioNesima: any;
   orarioStesicoro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.zone = {
            kind: 'Nesima'
        }
          
        this.modeKeys = [
            'Nesima',
            'San Nullo',
            'Cibali',
            'Milo',
            'Borgo',
            'Giuffrida',
            'Italia',
            'Galatea',
            'Giovanni XXIII',
            'Stesicoro'
        ]


        this.zone1 = {
            kind: 'Stesicoro'
        }
          
        this.modeKeys1 = [
            'Nesima',
            'San Nullo',
            'Cibali',
            'Milo',
            'Borgo',
            'Giuffrida',
            'Italia',
            'Galatea',
            'Giovanni XXIII',
            'Stesicoro'
        ]


        this.orarioNesima = [
            '07:14',
            '07:24',
            '07:34',
            '07:44',
            '07:54',
            '08:04',
            '08:14',
            '08:24',
            '08:34',
            '08:44',
            '08:54',
            '09:04',
            '09:14',
            '09:24',
            '09:34',
            '09:44',
            '09:54',
            '10:04',
            '10:14',
            '10:24',
            '10:34',
            '10:44',
            '10:54',
            '11:04',
            '11:14',
            '11:24',
            '11:34',
            '11:44',
            '11:54',
            '12:04',
            '12:14',
            '12:24',
            '12:34',
            '12:44',
            '12:54',
            '13:04',
            '13:14',
            '13:24',
            '13:34',
            '13:44',
            '13:54',
            '14:04',
            '14:14',
            '14:24',
            '14:34',
            '14:44',
            '14:54',
            '15:04',
            '15:14',
            '15:24',
            '--:--',
            '15:39',
            '15:54',
            '16:09',
            '16:24',
            '16:39',
            '16:54',
            '17:09',
            '17:24',
            '17:39',
            '17:54',
            '18:09',
            '18:24',
            '18:39',
            '18:54',
            '19:09',
            '19:24',
            '19:39',
            '19:54',
            '20:09',
            '20:24',
            '20:39',
            '20:54',
            '21:09',
            '21:24'
        ];
        
    this.orarioStesicoro = [
            '07:00',
            '07:10',
            '07:20',
            '07:30',
            '07:40',
            '07:50',
            '08:00',
            '08:10',
            '08:20',
            '08:30',
            '08:40',
            '08:50',
            '09:00',
            '09:10',
            '09:20',
            '09:30',
            '09:40',
            '09:50',
            '10:00',
            '10:10',
            '10:20',
            '10:30',
            '10:40',
            '10:50',
            '11:00',
            '11:10',
            '11:20',
            '11:30',
            '11:40',
            '11:50',
            '12:00',
            '12:10',
            '12:20',
            '12:30',
            '12:40',
            '12:50',
            '13:00',
            '13:10',
            '13:20',
            '13:30',
            '13:40',
            '13:50',
            '14:00',
            '14:10',
            '14:20',
            '14:30',
            '14:40',
            '14:50',
            '15:00',
            '15:10',
            '--:--',
            '15:25',
            '15:40',
            '15:55',
            '16:10',
            '16:25',
            '16:40',
            '16:55',
            '17:10',
            '17:25',
            '17:40',
            '17:55',
            '18:10',
            '18:25',
            '18:40',
            '18:55',
            '19:10',
            '19:25',
            '19:40',
            '19:55',
            '20:10',
            '20:25',
            '20:40',
            '20:55',
            '21:10'
        ];
        
  }





    ionViewDidLoad() { 
      console.log('ionViewDidLoad Orari');
    }



    mostra(){
        var strUser = this.modeKeys.selected;
    
        if(strUser == "Nesim"){
           this.orarioPrimary = this.orarioNesima;
        }
      }



    onChange(){

        if(this.destinazione == null){
          //alert("Inserisci la Direzione");
        }
        else if((this.place == "Nesima")&&(this.destinazione != "Nesima")){
          this.orarioPrimary = this.orarioNesima;
        }
        else if((this.place == "Nesima")&&(this.destinazione == "Nesima")){
          alert("Non ti serve la Metro");
        }
        else if(this.place == "Nesima"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "San Nullo"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Cibali"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Milo"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Borgo"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Giuffrida"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Italia"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Galatea"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if(this.place == "Giovanni XXIII"){
            this.orarioPrimary = null;
            alert(this.place);
        } else if((this.place == "Stesicoro")&&(this.destinazione != "Stesicoro")){
            this.orarioPrimary = this.orarioStesicoro;        
        }
        else if((this.place == "Stesicoro")&&(this.destinazione == "Stesicoro")){
          alert("Non ti serve la Metro");
        }
        else{
          }
    }

}
