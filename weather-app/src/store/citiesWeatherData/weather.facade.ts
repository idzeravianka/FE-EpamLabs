import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadWeatherData, SearchWeatherData, SearchAllCitiesFromStorage} from './weather.action';
import { weatherQuery } from './weather.selectors';
import { WeatherState } from './interfaces';
import { filter } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable()
export class WeatherDataFacade{
    public weather$ = this.store.select(weatherQuery.getWeatherData);
    private _cityWeather$ = this.store.select(weatherQuery.getWeatherByCityName);

    public cityWeather$ = combineLatest(this.weather$, this._cityWeather$).pipe(filter(([weather, _]) => weather.length > 0));

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