import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'a604e881baa900d56bf83a461313f836';
  URI: string = '';

  constructor(private httpClient: HttpClient) { 
    this.URI = `http://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&q=`

  }

  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
    
  }

}
