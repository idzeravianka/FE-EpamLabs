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
                citiesWeatherData: [action.payload]
            };
        case WeatherActionTypes.LoadWeatherDataError:
            return {
                ...state,
                citiesWeatherData: [...state.citiesWeatherData, action.payload]
            };
        case WeatherActionTypes.SearchWeatherDataSuccess:
            return{
                ...state,
                citiesWeatherData: [action.payload, ...state.citiesWeatherData]
            }
        case WeatherActionTypes.SearchWeatherDataError:
            return{
                ...state,
                citiesWeatherData: [...state.citiesWeatherData, action.payload]
            }
        case WeatherActionTypes.SearchAllCitiesFromStorageSuccess:
            return{
                ...state,
                citiesWeatherData: [...state.citiesWeatherData, action.payload]
            }
        default: return state;
    }
}