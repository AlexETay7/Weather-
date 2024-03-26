import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  cityName: string = "";

  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.weatherService.getWeatherData('Boise')
    .subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  getWeather() {
    console.log(this.weatherService.getWeatherData(this.cityName));
  }

}
