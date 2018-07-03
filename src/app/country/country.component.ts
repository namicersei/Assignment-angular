import { Component, OnInit } from '@angular/core';
import { CountryService } from '../core/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  flag = true;
  temp: any;
  public data: any;
  error = '';

  countryData: any [];
  constructor(private countryCodeService: CountryService) {}

  ngOnInit() {
    this.countryCodeService.getCountryDetails()
    .subscribe(
      (response) => {
        this.countryData = response;
        console.log(this.countryData);
      },
      error => {
        console.log(error);
        this.error = error;
      }
    );
  }
  getCountryData(countryName: string) {
    this.temp = countryName;
    this.flag = false;
    this.data = this.countryData.filter(data => data.name === countryName)[0];
  }

}

