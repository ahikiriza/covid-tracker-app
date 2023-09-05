import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent implements OnInit, OnChanges {

  @Input() covidData: any;
  topConfirmedCases: any;
  topConfirmedDeath: any[] = [];
  topConfirmedRecoveries: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.topConfirmedCases = this.covidData
    ?.sort((a: any, b:any) => b.confirmedCases - a.confirmedCases)
    .slice(0,5);
    this.topConfirmedDeath = this.covidData
    ?.sort((a: any, b:any) => b.death - a.death)?.slice(0,5);
    this.topConfirmedRecoveries = this.covidData
    ?.sort((a: any, b:any) => b.recoveries - a.recoveries)
    .slice(0,5);

  }

}
