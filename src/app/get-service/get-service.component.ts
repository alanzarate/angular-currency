import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.css']
})
export class GetServiceComponent {
  title = "Arquitectura";
  test = "prueba";

  currencyForm: FormGroup;

  responseCurrencyDto: ResponseCurrencyDto<any>;

  constructor(private fb: FormBuilder, 
              private currencyService: CurrencyService){
    this.currencyForm = this.fb.group(
      {
        from: '',
        to: '',
        amount: ''
      }
    )
  }

  submit(){
    console.log(this.currencyForm.value);
    this.currencyService.convertCurrency(
      this.currencyForm.value.from,
      this.currencyForm.value.to,
      this.currencyForm.value.amount
    ).subscribe({
      next: (data) => {
        console.log(data)
        this.responseCurrencyDto = data;
        console.log(this.responseCurrencyDto)
      },
      error: (error) => console.log("Error >>>>>>", error)
    });
    console.log("test");
  }

  submit2(){
    console.log("REST")
  }
}
