import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {
  // covidData: any = {};
  covidData: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCovidData()
    .subscribe(
      (data: any) =>{
        this.covidData =data;
        console.log('Summary Data', data);
      }
    );
  }

}
