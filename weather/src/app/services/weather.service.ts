import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string) {
    return this.http.get(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('mode', 'json')
      .set('units', 'metric')
      .set('appid', environment.weatherApiKey)
    })
  }
}
