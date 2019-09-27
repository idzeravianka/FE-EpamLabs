import { Component, OnInit } from '@angular/core';
import { GetWeatherServiceService } from '../services/get-weather-service.service';
import { CurrentCityDataFacade } from 'src/store/currentCityWeatherData/currentCity.facade';

@Component({
  selector: 'app-current-weather-using-location',
  templateUrl: './current-weather-using-location.component.html',
  styleUrls: ['./current-weather-using-location.component.css']
})
export class CurrentWeatherUsingLocationComponent implements OnInit {

  public currentCity: any;

  constructor(
    private _getWeatherService: GetWeatherServiceService,
    private _currentCityDataFacade: CurrentCityDataFacade
  ) { }

  ngOnInit() {
    this.currentCity = this._currentCityDataFacade.currentCityData$;
    // this._currentCityDataFacade.getCurrentWeather();
  }

}
