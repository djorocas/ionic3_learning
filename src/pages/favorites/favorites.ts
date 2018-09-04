import {Component} from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quote";


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private quoteService: QuotesService) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }


}
