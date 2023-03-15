import { Component, Query } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaginationDto } from '../dto/pagination.dto';
import { QueryDto } from '../dto/quey.dto';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';
import { CurrencyService } from '../service/currency.service';

 

@Component({
  selector: 'app-historic-pagination',
  templateUrl: './historic-pagination.component.html',
  styleUrls: ['./historic-pagination.component.css']
})
export class HistoricPaginationComponent {

  sizeOfData = [
    {value:10, viewValue:'10'},
    {value:25, viewValue:'25'},
    {value:50, viewValue:'50'},
    {value:100, viewValue:'100'},
  ];

  selectedSizeOfData = 10;

  orderSort = [
    {value:'asc', viewValue:'ASCENDENTE'},
    {value:'desc', viewValue:'DESCENDENTE'},
  ];

  selectedOrderSort = 'asc'

  sortByList = [
    {value:'id', viewValue:'ID'},
    {value:'currencyFrom', viewValue:'FROM'},
    {value:'currencyTo', viewValue:'TO'},
    {value:'amount', viewValue:'AMOUNT'},
    {value:'result', viewValue:'RESULT'},
    {value:'date', viewValue:'DATE'},
  
  ];
  selectedSortByList = 'id'


  dataForm: FormGroup;
   
  
  
  config: any;
  count:number;
  data:QueryDto[];

  configSorting:any;

  response: ResponseCurrencyDto<PaginationDto>;

  constructor (private currencyService: CurrencyService){
    this.getData(10, 1, "","");
    this.configSorting = {
      sortBy: this.selectedSortByList,
      order: this.selectedOrderSort
    }
    
  }
  
  pageChanged(event: number){
    console.log(">>>>>>>>>>>> EVENTO >>>>>>>>",event);
    this.config.currentPage = event;
    console.log(">>> debug config>>> ", this.config, this.configSorting);
    this.getData(this.config.itemsPerPage,
       event, 
       this.configSorting.sortBy, 
       this.configSorting.order);
    //this.getData(10,event,"","");
     
  }

  getData(limit:number, currentPage:number, sortBy:string, order:string){
    this.currencyService.getDataFromDbPagination(
      limit,
      currentPage,
      sortBy,
      order
    ).subscribe({
      next: (data) => {
        this.response = data
        this.count = this.response.data.totalValues;
        this.data = this.response.data.values;
        this.config = {
          itemsPerPage: limit,
          currentPage: currentPage,
          totalItems: this.count
        }
        console.log(this.config);
      },
      error: (error) => console.log(">>>>>>>> ERROR >>>>>>>>>>", error)
    });
  }

  change1(value: any, opt: string) {
    console.log(">>>>>>>> CHANGE1 >>>>>>", value, "---", opt);

    if (opt == 'pagina'){
      this.config.itemsPerPage = value;
    }
    if (opt == 'field'){
      this.configSorting.sortBy = value;
    }
    if (opt == 'order'){
      this.configSorting.order = value;
    }
    
    this.getData(this.config.itemsPerPage, this.config.currentPage, this.configSorting.sortBy, this.configSorting.order);

  }
  
}
