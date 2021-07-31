import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';


@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.scss']
})
export class VaccinationComponent  {
public options1:any;
public options2:any;
  vaccination=[
    {
      "ID": 1001,
      "Country": 'India',
      "Covaxin":6000,
      "Covishield":10000,
      "Sputnik-v":1000,
      "Total Vaccination":17000
    },
    {
       "ID": 1002,
       "Country": "China",
      "Covaxin":2000,
      "Covishield":7000,
      "Sputnik-v":1000,
      "Total Vaccination":10000
    },
    {
       "ID": 1003,
       "Country": "United States",
      "Covaxin":1000,
      "Covishield":9000,
      "Sputnik-v":1500,
      "Total Vaccination":11500
    },
  {  
      "ID": 1004,
      "Country": "Brazil",
      "Covaxin":9000,
      "Covishield":1200,
      "Sputnik-v":1400,
      "Total Vaccination":11600
    },
  {
      "ID": 1005,
      "Country": "Russia",
      "Covaxin":1000,
      "Covishield":9000,
      "Sputnik-v":1500,
      "Total Vaccination":11500
    },
  {
      "ID": 1006,
      "Country": "United Kingdom",
      "Covaxin":1000,
      "Covishield":9000,
      "Sputnik-v":1500,
      "Total Vaccination":11500
  },
  {
      "ID": 1007,
      "Country": "France",
      "Covaxin":1000,
      "Covishield":9000,
      "Sputnik-v":1500,
      "Total Vaccination":11500
  }
  ];

  constructor(private http:HttpClientModule) { 
    this.options1= {
      title: { text: "Vaccination in a country" },
  //subtitle: { text: 'in billion U.S. dollars' },
     data:this.vaccination,
      series: [
        {
          type: 'column',
          xKey: 'Country',
          yKeys: ['Covaxin', 'Covishield', 'Sputnik-v'],
          yNames: ['Covaxin', 'Covishield', 'Sputnik-v'],
          grouped: true,
        },
      ],
    };
    this.options2= {
      title: { text: "Total Vaccination in a country" },
     subtitle: { text: 'in millions' },
     data:this.vaccination,
      series: [
        {
          type: 'pie',
          angleKey: 'Total Vaccination',
          labelKey: 'Country',
        },
      ],
    };
  }

  ngOnInit(): void {
  }


 
}