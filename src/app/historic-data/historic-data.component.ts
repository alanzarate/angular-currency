import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { QueryDto } from '../dto/quey.dto';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-historic-data',
  templateUrl: './historic-data.component.html',
  styleUrls: ['./historic-data.component.css']
})
export class HistoricDataComponent {

  pageSizeOptions = [5, 10, 25, 100]
  length = 105
  pageSize = this.pageSizeOptions[1]
  displayedColumns: string[] = ['id', 'from', 'to', 'result', 'amount', 'date'];
  responseCurrencyDto = new MatTableDataSource <QueryDto> () ;
  
  constructor( private currencyService: CurrencyService){
    
  }

  ngOnInit():void{
    this.currencyService.getDataFromDb() 
    .subscribe({
      next: (data) => {
        console.log(data)
         
        this.responseCurrencyDto = new MatTableDataSource < QueryDto>(data.data);
         
      },
      error: (error) => {
        console.log("error >>>>", error)
      }
    })
  }
  
}
