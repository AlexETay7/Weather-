import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { LatLong } from '../models/latlong.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCityLatAndLong(cityName: string): Observable<LatLong> {
    return this.http.get<LatLong>(environment.weatherApiLatLongUrl, {
      params: new HttpParams()
      .set('q', cityName)
      .set('limit', '1')
      .set('appid', environment.weatherApiKey)
    })
  }

  getWeatherData(lat: string, long: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('lat', lat)
      .set('lon', long)
      .set('units', 'imperial')
      .set('appid', environment.weatherApiKey)
    })
  }

  

}
