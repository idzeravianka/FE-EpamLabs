import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {WeatherData} from '../app/model';

import { LoadWeatherData, LoadWeatherDataError, LoadWeatherDataSuccess} from './weather.action';
import { weatherQuery } from './weather.selectors';
import { WeatherState } from './interfaces';

@Injectable()
export class WeatherDataFacade{
    public weather$ = this.store.select(weatherQuery.getWeatherData);

    constructor(private store: Store<WeatherState>) {}

    public loadWeather(city?: string): void {
        this.store.dispatch(new LoadWeatherData(city));
    }

    public loadWeatherSuccess(weatherData: WeatherData){
        console.log(weatherData);
        this.store.dispatch(new LoadWeatherDataSuccess(weatherData));
    }
}