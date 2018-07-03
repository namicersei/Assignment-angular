import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = './assets/country.json';

  constructor(private http: HttpClient) { }

  public getCountryDetails() {
    return this.http.get<any>(this.url);
  }
}

