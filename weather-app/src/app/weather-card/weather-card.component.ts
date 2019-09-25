import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherData } from '../model';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor() { }
  
  @Input() weatherData: CityWeatherData;

  ngOnInit() {
  }

}
