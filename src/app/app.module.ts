import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangerComponent } from './shared/components/currency-exchanger/currency-exchanger.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { CurrencyConverterComponent } from './layout/pages/currency-converter/currency-converter.component';
import { consts } from './core/consts/consts.constant';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerComponent,
    HomeComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...consts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
