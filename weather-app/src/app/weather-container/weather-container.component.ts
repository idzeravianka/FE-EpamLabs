import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CityWeatherData } from '../model';
import { Observable } from 'rxjs';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';
import { SaveCityService } from '../services/save-city.service';
import { GetWeatherServiceService } from '../services/get-weather-service.service';

@Component({
  selector: 'weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherContainerComponent implements OnInit {
  public weatherData$: Observable<CityWeatherData[]>;
  public cities: string[];

  constructor(
    private weatherFacade: WeatherDataFacade,
    private _saveCityService: SaveCityService,
    private _getWeatherService: GetWeatherServiceService
  ) { }

  ngOnInit() {
    this.weatherData$ = this.weatherFacade.weather$;
    this.cities = this._saveCityService.getCitiesFromLocalStorage();
    this.weatherFacade.searchAllCitiesFromStorage(this.cities);
  }

}
