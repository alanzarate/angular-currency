import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginationDto } from '../dto/pagination.dto';
import { QueryDto } from '../dto/quey.dto';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  // observable measn async function and need to be observable 
  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto<QueryDto>>{
    
    console.log("HERE IM USING ENVIRONMENT");
    console.log(environment.API_URL_TEST);
    console.log(environment.BACKEND_URL);

    return this.http.get<any>(environment.BACKEND_URL+'/api/v1/currency/convert?from='+from+"&to="+to+"&amount="+amount);
  }

  public getDataFromDb(): Observable < ResponseCurrencyDto < Array<QueryDto> >>{
    return this.http.get<any>(environment.BACKEND_URL+"/api/v1/currency/all");
  }   
 
  public getDataFromDbPagination(limit: number, currentPage: number, sortBy: string, order:string):
          Observable<ResponseCurrencyDto<PaginationDto>>{
          var str:string = environment.BACKEND_URL+"/api/v1/currency/all?limit="+limit+"&currentPage="+currentPage+"&sortBy="+sortBy+"&order="+order;
          
          return this.http.get<any>(str);  
  
  }
}
