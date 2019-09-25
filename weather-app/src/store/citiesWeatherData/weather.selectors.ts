import { createFeatureSelector, createSelector} from '@ngrx/store';

import { WeatherState } from './interfaces';

const getWeatherDataState = createFeatureSelector<WeatherState>('citiesWeatherDataState');

const GetWeatherData = (state: WeatherState) => state.citiesWeatherData;

const getWeatherData = createSelector(
    getWeatherDataState,
    GetWeatherData
)

const getWeatherByCityName = createSelector(
    getWeatherData,
    (citiesWeatherData) => (cityName: string) => {
        return citiesWeatherData.find(cityWeather => cityWeather.city === cityName)
    } 
)

export const weatherQuery = {
    getWeatherData,
    getWeatherByCityName
}