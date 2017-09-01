import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,MenuController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home'


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus: GooglePlus,public loadCtrl:LoadingController,private storage: Storage,public menu:MenuController) {
  }
  ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
    
  }

  login(){
    //loading
    let load = this.loadCtrl.create({
      content:"Authenticating"
    });
    load.present();
  this.googlePlus.login({})
  .then((user)=>{
    load.dismiss();
    this.storage.set('user',{
      name: user.displayName,
      email: user.email,
      picture: user.imageUrl
    })
    .then(()=> this.navCtrl.setRoot(HomePage),(err)=> console.log(err))
  },(err)=> {
    alert("authentication failed")
  });
  
  }

}
