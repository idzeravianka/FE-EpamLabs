import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadWeatherData, SearchWeatherData, SearchAllCitiesFromStorage} from './weather.action';
import { weatherQuery } from './weather.selectors';
import { WeatherState } from './interfaces';
import { filter, map, switchMap, mergeMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable()
export class WeatherDataFacade{
    public weather$ = this.store.select(weatherQuery.getWeatherData);
    public cityWeather$ = (cityName: string) => this.store.select(weatherQuery.getWeatherByCityName, cityName);

    constructor(private store: Store<WeatherState>) {}

    public loadWeather(): void {
        this.store.dispatch(new LoadWeatherData());
    }

    public searchWeather(city: string) {
        this.store.dispatch(new SearchWeatherData(city));
    }

    public searchAllCitiesFromStorage(cities: string[]){
        this.store.dispatch(new SearchAllCitiesFromStorage(cities));
    }
}