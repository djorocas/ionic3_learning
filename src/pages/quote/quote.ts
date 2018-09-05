import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quote: Quote;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quote = this.navParams.get('quote');
    console.log(this.quote);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

}
