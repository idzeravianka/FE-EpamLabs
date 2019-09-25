import { Component, OnInit, Input } from '@angular/core';
import { CityWeatherData } from '../model';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  @Input() city: CityWeatherData;

  constructor() { }

  ngOnInit() {
  }

}
