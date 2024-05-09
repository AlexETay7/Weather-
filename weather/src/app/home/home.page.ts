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


  date: Date = new Date();
  cityName: string = "Boise";
  lat: number = 43.6166163;
  lon: number = -116.200886;
  weatherData!: WeatherData; 
  currentDate: Date = new Date(); 
  numberOfDaysToShow: number = 5; 
  datesToShow: Date[] = [];

  ngOnInit(): void {
    this.makeWeatherCall();
    this.generateDates();
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
        }
      });
  }

  generateDates() {
    for (let i = 0; i < this.numberOfDaysToShow; i++) {
      const nextDay = new Date(this.currentDate);
      nextDay.setDate(nextDay.getDate() + i);
      this.datesToShow.push(nextDay);
    }
  }

  async showClickedDaysWeather() {
    console.log("showing weather..");
  }

}
