import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../index.paginas"

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  sinthes:any[] = [
    {marca: "Moog", medelo: "modular"},
    {marca: "Nord", modelo: "Lead"},
    {marca: "Korg", modelo: "Radias"},
    {marca: "Roland", modelo: "Juniper"}
  ];

  pagina3:any = Pagina3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3( sinthe:any ){
    console.log( sinthe );
    this.navCtrl.push( Pagina3Page, { 'sinthe': sinthe } );
  }

}
