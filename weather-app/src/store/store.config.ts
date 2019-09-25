import { weatherReducer } from './citiesWeatherData/weather.reducer';
import { WeatherState } from './citiesWeatherData/interfaces';

import { currentCityReducer } from './currentCityWeatherData/currentCity.reducer';
import { CurrentCityState } from './currentCityWeatherData/interfaces';

export interface State{
    citiesWeatherData: WeatherState;
    currentCityState: CurrentCityState;
}

export const reducers = { 
    citiesWeatherData: weatherReducer,
    currentCityState: currentCityReducer
}