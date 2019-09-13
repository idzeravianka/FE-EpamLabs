import { WeatherActionTypes, WeatherActions } from './weather.action';
import { initialState } from './weather.initial';
import { WeatherState } from './interfaces';

export const weatherReducer = (
    state: WeatherState = initialState,
    action: WeatherActions
): WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.LoadWeatherData:
            return {
                ...state,
            };
        
        case WeatherActionTypes.LoadWeatherDataSuccess:
            return {
                ...state,
                weather: action.payload
            };
        case WeatherActionTypes.LoadWeatherDataError:
            return {
                ...state
            };
        default: return state;
    }
}