import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from 'src/app/core/services/currency-service.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss']
})
export class CurrencyExchangerComponent implements OnInit {

  constructor(private currencyService: CurrencyService,
    private fb: FormBuilder) { }

  // Variables
  allCurrencies$ = this.currencyService.allCurrenciesSubject$;
  loading$ = this.currencyService.loading$;

  convertCurrencyForm: FormGroup;


  ngOnInit() {
    this.currencyService.getAllCurrencies();

    this.createForm();
  }

  createForm() {
    this.convertCurrencyForm = this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.convertCurrencyForm.value)
  }


}
