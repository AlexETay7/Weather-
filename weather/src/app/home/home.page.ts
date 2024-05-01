import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private weatherService: WeatherService) {}

  reqComplete: boolean = false;
  cityName: string = "Boise";
  lat: number = 43.6166163;
  lon: number = -116.200886;
  weatherData!: WeatherData; 

  ngOnInit(): void {
    this.makeWeatherCall();
    this.cityName = "";
  }

  public makeWeatherCall() {
    this.weatherService.getCityLatAndLong(this.cityName)
      .subscribe({
        next: (response) => {
          this.lat = response.lat;
          this.lon = response.lon;
          console.log(response);
          this.getWeather(this.lat, this.lon);
        }
      });
  }

  private getWeather(lat: number, lon: number) {
    this.weatherService.getWeatherData(lat, lon)
      .subscribe({
        next: (response) => {
          this.weatherData = response; 
          console.log(response);
        },
        complete: () => {
          // Set reqComplete to true when the request completes
          this.reqComplete = true;
        }
      });
  }

}
