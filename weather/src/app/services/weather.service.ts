import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'imperial')
      .set('appid', environment.weatherApiKey)
    })
  }

  // makeIconCall(weatherIcon: string) {
  //   return this.http.get(environment.weatherIconApiUrl + weatherIcon + "@2x.png");
  // }

}
