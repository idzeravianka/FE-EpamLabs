import { weatherReducer } from './weather.reducer';
import { WeatherState } from './interfaces';

export interface State{
    weatherData: WeatherState;
}

export const reducers = { 
    weather: weatherReducer
}