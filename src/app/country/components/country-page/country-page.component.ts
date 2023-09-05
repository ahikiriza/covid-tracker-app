import { Component, OnInit } from '@angular/core';
// import { count } from 'console';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  covidData: any;

  constructor(
    private dataService: DataService,
    private searchService: SearchService
    ) 
    { }

  ngOnInit(): void {
    this.dataService.getCovidData()
    .subscribe((data: any) =>{
      this.covidData =data;
    })
  }

  searchCountry(countries: string){
    const country =this.covidData.country
    .filter(
      (c:any) => c.country.tolowercase().includes(country.toLowerCase())
    );
    this.searchService.setCountries(country);
    // console.log('country', country);

  }

}
