import { Component, OnInit } from '@angular/core';
import { GetWeatherServiceService } from '../services/get-weather-service.service';
import { WeatherData } from '../model';
import { WeatherDataFacade } from 'src/store';

@Component({
  selector: 'weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {

  public weatherData: WeatherData;

  constructor(private weatherService: GetWeatherServiceService, private weatherFacade: WeatherDataFacade) { }

  ngOnInit() {
    this.weatherFacade.loadWeather();
    this.weatherFacade.weather$.subscribe(res => this.weatherData = res);
  }

}
