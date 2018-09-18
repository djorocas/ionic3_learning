import {Component} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quote";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quoteService: QuotesService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }


  onViewDetails(quote: Quote) {
    // this.navCtrl.push(QuotePage, {quote: quote})
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();

    //Listen to data that was passed from modal
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        const position = this.quotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });

        this.quotes.splice(position, 1);
      }
    });
  }

}
