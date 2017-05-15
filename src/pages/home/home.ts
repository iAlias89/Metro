import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Orari } from '../orari/orari';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	orari = Orari;
	departed : any;
    arrived : any ;
   

 	constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 		this.geolocation.getCurrentPosition().then((resp) => {
		 if( resp.coords.latitude == 37.5121311)
		 	 console.log('OK Location');
			 // resp.coords.latitude
			 // resp.coords.longitude
		}).catch((error) => {
		  console.log('Error getting location', error);
		});
	}


	addMarker(){
 		this.geolocation.getCurrentPosition().then((resp) => {
		 alert("La tua posizione è: \n" + resp.coords.latitude + " - " + resp.coords.longitude);
		}).catch((error) => {
		  console.log('Error getting location', error);
		});
	}

	next(){
 		//departed = this.departed;
 		alert("METRO CHIUSA");
 		
 	}

 

}