import {Component} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quote";
import {NavController} from "ionic-angular";
import {QuotePage} from "../quote/quote";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quoteService: QuotesService,
              private navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }


  onViewDetails(quote: Quote) {
    this.navCtrl.push(QuotePage, {quote: quote})
  }

}
