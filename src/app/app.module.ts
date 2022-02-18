import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangerComponent } from './shared/components/currency-exchanger/currency-exchanger.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { CurrencyConverterComponent } from './layout/pages/currency-converter/currency-converter.component';
import { consts } from './core/consts/consts.constant';
import { HttpService } from './core/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerComponent,
    HomeComponent,
    CurrencyConverterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...consts,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
