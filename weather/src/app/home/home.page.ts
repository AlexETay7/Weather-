import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private weatherService: WeatherService) {}

  cityName: string = "Boise";
  weatherData!: WeatherData; // Removed initialization here

  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  private getWeather(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response; // Assign response to weatherData
          console.log(response);
        }
      });
  }

  // private getWeatherIcon(weatherIcon: string) {
  //   this.weatherService.makeIconCall(this.weatherData.weather[0].icon);
  // }

  onSubmit() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

}
