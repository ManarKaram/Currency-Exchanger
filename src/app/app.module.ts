import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangerComponent } from './shared/components/currency-exchanger/currency-exchanger.component';
import { HomeComponent } from './layout/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
