import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quote";


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(public navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController,
              private quoteservice: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add a quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('OK');
            this.quoteservice.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled')
          }
        }
      ]

    })
    alert.present();
  }


}
