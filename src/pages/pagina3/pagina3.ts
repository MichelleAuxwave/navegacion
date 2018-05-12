import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {
  sint:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log( navParams );
    this.sint = this.navParams.get("sinthe");
  }

  irAtras(){
    this.navCtrl.pop();
  }

  irRoot(){
    this.navCtrl.popToRoot();
  }

}
