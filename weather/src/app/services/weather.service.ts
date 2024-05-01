import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCityLatAndLong(cityName: string) {
    return this.http.get<any[]>(environment.weatherApiLatLongUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('limit', '1')
        .set('appid', environment.weatherApiKey)
    }).pipe(
      map(response => {
        if (response && response.length > 0) {
          const city = response[0];
          return { lat: city.lat, lon: city.lon };
        }
        throw new Error('City not found');
      })
    );
  }

  getWeatherData(lat: number, long: number): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('lat', lat.toString())
      .set('lon', long.toString())
      .set('units', 'imperial')
      .set('appid', environment.weatherApiKey)
    })
  }

  

}
