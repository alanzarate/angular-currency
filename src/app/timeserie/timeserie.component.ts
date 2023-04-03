import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TimeSeriesDto } from '../dto/timeseries.dto';
import { CurrencyService } from '../service/currency.service';
import { error } from 'console';
import {FormGroup, FormControl} from '@angular/forms';

interface Symbol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-timeserie',
  templateUrl: './timeserie.component.html',
  styleUrls: ['./timeserie.component.css']
})
export class TimeserieComponent implements OnInit {
  
  flag = true;
  selectedValue1: string;
  selectedValue2: string;

  symbols1: Symbol[] = [];


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  chart: any;
  map0: Map<string, number>;
  ch: any;
  array1: any;
  array2: any;
  keys: any;
  chartCom: Chart;
  constructor( private currencyService: CurrencyService ) {}

  ngOnInit():void{
    this.chart = document.getElementById('my_chart');
    Chart.register(...registerables);

    this.currencyService.getSymbols().subscribe({
      next: (data) => {
        const map = new Map(Object.entries(data.data))
          map.forEach((value: string, key: string) => {
            this.symbols1.push({value: key, viewValue: value})
          });
      },
      error:  (error) => {
        console.log("Error >>>>", error);
      }
    });


    
     
    
    
  }

  submit():void{
    
    this.currencyService.getDataTimeSeries(
      this.selectedValue1, this.selectedValue2, this.formattedDate(this.range.value.start), this.formattedDate(this.range.value.end)
    ).subscribe({
      next: (data) => {
        const map = new Map(Object.entries(data.data.data))
        var k = [...map][0]
        console.log(k)
        const map0 = new Map(Object.entries([...map][0][1]))
        console.log(map0)
        
         
        this.array1 = [...map0.values()]
        this.array2 = [...map0.keys()]
        this.keys = [...map][0][0]
         
        this.loadChart();
        
        

        //console.log(this.timeSeriesDto.data.get('EUR')?.keys() )
      },
      error:  (error) => {
        console.log("Error >>>>", error);
      }
    });
    console.log("_________________________________-")
    console.log(this.selectedValue1)
    console.log(this.selectedValue2)
    console.log(this.formattedDate(this.range.value.start))
    console.log(this.range.value.end)
    
  }

  formattedDate(date:Date):string{
    var day:number = date.getDate();
    var month:number = date.getMonth() +1;
    var year:number = date.getFullYear();
    console.log(day, month, year)

    var dayStr: string;
    var monthStr: string;
    if (day < 10) {
      dayStr = '0' + day.toString();
    }else{
      dayStr = day.toString();
    }
    
    if (month < 10) {
      monthStr = '0' + month.toString();
    }else{
      monthStr = month.toString();
    }

    return year.toString() + '-'+monthStr +'-'+dayStr; 
    
  }

  loadChart(){ 
    if(this.chartCom){
      this.chartCom.destroy();
    }
    this.chartCom = new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            //data: [30,60,40,50,40,55,85,65,75,50,70],
            data: this.array1,
            label: this.keys,
            backgroundColor: '#007bff',
            tension: 0.2,
            
          },

        ],
        //labels: ["as","ASDASD",'3','4','5','6','7','8','9','10','11',"as","ASDASD",'3','4','5','6','7','8','9','10','11']
        labels: this.array2
      },
      options:
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false
            
          }
        }
      }
    });
  }

}
