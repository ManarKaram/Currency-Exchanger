import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiRequest } from '../interfaces/api-request';
import { HttpService } from './http.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpService: HttpService) { }

  loading$ = new BehaviorSubject(false);
  allCurrenciesSubject$ = new BehaviorSubject(null);


  getAllCurrencies() {
    // open loading 
    this.loading$.next(true)
    // prepare request obj
    let path = 'latest';

    this.httpService
      .getReq(path).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res)
          this.allCurrenciesSubject$.next(res.rates);

          // close loading 
          this.loading$.next(false)
        }
      })

  }
  convertCurrency(data){
    // open loading 
    this.loading$.next(true)
    // prepare request obj
    let path = 'convert';
    this.httpService
      .getReq(path, {params: data}).pipe(take(1)).subscribe({
        next: (res) => {
          console.log(res)
          // this.allCurrenciesSubject$.next(res.rates);

          // close loading 
          this.loading$.next(false)
        }
      })
    // this.httpService.getReq('convert',{params: {...data}})
  }
}
