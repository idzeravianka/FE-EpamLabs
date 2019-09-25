import { Injectable } from '@angular/core';
import { GetWeatherServiceService } from './get-weather-service.service';
import { map, switchMap } from 'rxjs/operators';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';

@Injectable({
  providedIn: 'root'
})
export class SaveCityService {

  constructor(private _getWeatherService: GetWeatherServiceService, private _facade: WeatherDataFacade) { }

  saveCityToLocalStorage(city: string){
    this._getWeatherService.searchWeather(city).toPromise().then(
      (response: any) => {
        let existing: string | string[] = localStorage.getItem('citiesId');

        existing = existing ? existing.split(',') : [];
        if(existing.includes(response.city.id.toString())){
          existing;
        } else{
          existing.unshift(response.city.id);
          this._facade.searchWeather(response.city.name);
          console.log(response);
        }

        localStorage.setItem('citiesId', existing.toString());
      }
    )
  }

  getCitiesFromLocalStorage(): string[]{
    let existing: string | string[] = localStorage.getItem('citiesId')
    
    existing = existing ? existing.split(',') : [];

    return existing;
  }
}
