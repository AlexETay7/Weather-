import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  ApiKey = '085f41f3da4bb1804408481013545c75';

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string) {
    return this.http.get(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('mode', 'json')
      .set('units', 'metric')
      .set('appid', '085f41f3da4bb1804408481013545c75')
    })
  }
}
