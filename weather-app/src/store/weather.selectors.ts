import { createFeatureSelector, createSelector} from '@ngrx/store';

import { WeatherState } from './interfaces';

const getWeatherDataState = createFeatureSelector<WeatherState>('weatherDataState');

const GetWeatherData = (state: WeatherState) => state.weather;

const getWeatherData = createSelector(
    getWeatherDataState,
    GetWeatherData
)

export const weatherQuery = {
    getWeatherData
}