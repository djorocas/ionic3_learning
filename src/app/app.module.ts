import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FavoritesPage} from "../pages/favorites/favorites";
import {QuotePage} from "../pages/quote/quote";
import {SettingsPage} from "../pages/settings/settings";
import {QuotesPage} from "../pages/quotes/quotes";
import {LibraryPage} from "../pages/library/library";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quote";
import {LoginPage} from "../pages/login/login";
import {DashboardPage} from "../pages/dashboard/dashboard";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    QuotePage,
    SettingsPage,
    QuotesPage,
    LibraryPage,
    TabsPage,
    LoginPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    QuotePage,
    SettingsPage,
    QuotesPage,
    LibraryPage,
    TabsPage,
    LoginPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
  ]
})
export class AppModule {}
