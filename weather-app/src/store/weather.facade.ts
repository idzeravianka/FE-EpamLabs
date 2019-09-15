import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {WeatherData} from '../app/model';

import { LoadWeatherData, LoadWeatherDataError, LoadWeatherDataSuccess, SearchWeatherData} from './weather.action';
import { weatherQuery } from './weather.selectors';
import { WeatherState } from './interfaces';

@Injectable()
export class WeatherDataFacade{
    public weather$ = this.store.select(weatherQuery.getWeatherData);

    constructor(private store: Store<WeatherState>) {}

    public loadWeather(): void {
        this.store.dispatch(new LoadWeatherData());
    }

    public searchWeather(city: string) {
        this.store.dispatch(new SearchWeatherData(city));
    }
}