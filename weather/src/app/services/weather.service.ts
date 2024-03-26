import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  ApiKey = '085f41f3da4bb1804408481013545c75';

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={this.ApiKey}')
  }
}
