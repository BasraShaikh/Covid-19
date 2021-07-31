import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  public line;
  public chartThemeOverrides;
  public options1;
  public rowdata:any[];
     columnDefs=[
      {
        field : "ID", 
        sortable:true,
        width: 150, 
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
        chartDataType: 'category'
      },
      {
        field : "Country",
        sortable:true,
        width: 150, 
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
        chartDataType: 'category'
      },
      {
        field : "Corona",
        sortable:true,
        width: 150,
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true, 
        resizable: true,
        chartDataType: 'series'
      },
      {
        field : "White Fungus",
        sortable:true,
        width: 150, 
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true,

        resizable: true,
        chartDataType: 'series'
      },
      {
        field : "Black Fungus",
        sortable:true,
        width: 150,
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true, 
        resizable: true,
        chartDataType: 'series'
    },
      
    ];
    chartThemes = [
      //background dark black --->ag-pastel-dark
      'ag-pastel-dark',
      /*'ag-vivid',
      'ag-vivid-dark',
      'ag-solar',
      'ag-materia'*/
    ];
   rowHeight = 50;
   constructor(private http: HttpClient) {
    this.chartThemeOverrides = {
      common: {
          title: {
              fontSize: 22,
              fontFamily: 'Arial, sans-serif',
              text:'Virus Cases in a Country'
          }
      }
  };
}
  //Used Static data
  /*rowData=[
    {EMPID : '100123', NAME:'Pranoti', Language:'JAVA',Email:'pranoti@gmail.com'},
    {EMPID : '100124', NAME:'Palak', Language:'Angular',Email:'palak@gmail.com'},
    {EMPID : '100125', NAME:'Anurag', Language:'Veu',Email:'anurag@gmail.com'},
    {EMPID : '100126', NAME:'Pooja', Language:'JAVA',Email:'pooja@gmail.com'},
    {EMPID : '100127', NAME:'Ashish', Language:'Machine Learning',Email:'ashish@gmail.com'}
   ];*/
   
  
   //Fetched remote Data(Dynamic Data)
  rowData : Observable<any[]>;
   ngOnInit(): void {
     
    this.rowData = this.http.get<any[]>('http://localhost:3000/patient');
 }
  
  onFirstDataRendered(params) {
    var createRangeChartParams = {
      
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 5000,
        columns: ['Country', 'Corona', 'White Fungus', 'Black Fungus'],
      },
      chartThemeOverrides: {
        common: {
          title: {
            enabled: true,
            text:'Virus Cases in a Country',
          }
        }
      },
      chartType: 'groupedColumn',
      chartContainer: document.querySelector('#myChart'),
      aggFunc: 'sum',
      
    };
    params.api.createRangeChart(createRangeChartParams);
  }
  
  /*onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }*/
 

  
}
