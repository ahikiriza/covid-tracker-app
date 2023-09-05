import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  summaryData: any =[];
  totalDeath =0;
  totalRecoveries =0;
  totalConfirmedCases =0;

  constructor() { }

  ngOnInit(): void {
  
    
  }
  ngOnChanges(): void {
    this.summaryData =this.covidData;
    this.calculateSums();    
  }
  calculateSums(): void {

    this.totalDeath =this.summaryData.reduce((sum, data) => sum + data.death, 0);
    this.totalRecoveries =this.summaryData.reduce((sum, data) => sum + data.recoveries,0);
    this.totalConfirmedCases = this.summaryData.reduce((sum, data) => sum + data.confirmedCases,0);
    // console.log('total confirmed',this.totalConfirmedCases);
  }

}
