import { Action, createAction, props } from '@ngrx/store';
import { WeatherData } from 'src/app/model';

export enum WeatherActionTypes{
    LoadWeatherData = 'Load Weather Data',
    LoadWeatherDataSuccess = 'Load Weather Data (Success)',
    LoadWeatherDataError = 'Load Weather Data (Error)',
    SearchWeatherData = 'Search Weather Data',
    SearchWeatherDataSuccess = 'Search Weather Data (Success)',
    SearchWeatherDataError = 'Search Weather Data (Error)',
}

export class LoadWeatherData implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherData;

    constructor() {}
}

export class LoadWeatherDataSuccess implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherDataSuccess;

    constructor(public payload: WeatherData) {}
}

export class LoadWeatherDataError implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherDataError;

    constructor(public payload: WeatherData) {}
}

export class SearchWeatherData implements Action{
    public readonly type = WeatherActionTypes.SearchWeatherData;

    constructor(public payload: string) {}
}

export class SearchWeatherDataSuccess implements Action{
    public readonly type = WeatherActionTypes.SearchWeatherDataSuccess;

    constructor(public payload: WeatherData) {}
}

export class SearchWeatherDataError implements Action{
    public readonly type = WeatherActionTypes.SearchWeatherDataError;

    constructor(public payload: WeatherData) {
        console.log('error action');}
}

export type WeatherActions = 
    | LoadWeatherData
    | LoadWeatherDataSuccess
    | LoadWeatherDataError
    | SearchWeatherData
    | SearchWeatherDataSuccess
    | SearchWeatherDataError;