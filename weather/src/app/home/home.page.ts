import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';
import { LatLong } from '../models/latlong.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private weatherService: WeatherService) {}

  reqComplete: boolean = false;

  cityName: string = "Boise";
  lat: number = 43.6166163;
  long: number = -116.200886;
  weatherData!: WeatherData; 
  latLong!: LatLong;

  ngOnInit(): void {
    this.getLatAndLong(this.cityName);
    this.getWeather(this.lat, this.long);
    this.cityName = '';
  }

  private getWeather(lat: number, long: number) {
    this.weatherService.getWeatherData(lat, long)
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

  private getLatAndLong(cityName: string) {
    this.weatherService.getCityLatAndLong(cityName)
      .subscribe({
        next: (response) => {
          this.latLong = response;
          console.log(response);
        }
    })
  }

  makeWeatherCall() {
    this.getLatAndLong(this.cityName);
    this.getWeather(this.lat, this.long);
  }

}
