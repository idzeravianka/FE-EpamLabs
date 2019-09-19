import { WeatherActionTypes, WeatherActions } from './weather.action';
import { initialState } from './weather.initial';
import { WeatherState } from './interfaces';

export const weatherReducer = (
    state: WeatherState = initialState,
    action: WeatherActions
): WeatherState => {
    switch (action.type) {        
        case WeatherActionTypes.LoadWeatherDataSuccess:
            return {
                ...state,
                weather: action.payload
            };
        case WeatherActionTypes.LoadWeatherDataError:
            return {
                ...state,
                weather: action.payload
            };
        case WeatherActionTypes.SearchWeatherDataSuccess:
            return{
                ...state,
                weather: action.payload
            }
        case WeatherActionTypes.SearchWeatherDataError:
            return{
                ...state,
                weather: action.payload
            }
        default: return state;
    }
}