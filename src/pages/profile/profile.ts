import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';



/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private googlePlus: GooglePlus) {
  }

 logout(){
     this.googlePlus.logout()
     .then((res)=> {
       this.storage.remove('user')
       .then(()=>{
         this.navCtrl.setRoot("LoginPage")
       })
     })
 }
}
