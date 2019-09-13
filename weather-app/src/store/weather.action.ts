import { Action, createAction, props } from '@ngrx/store';
import { WeatherData } from 'src/app/model';

export enum WeatherActionTypes{
    LoadWeatherData = 'Load Weather Data',
    LoadWeatherDataSuccess = 'Load Weather Data (Success)',
    LoadWeatherDataError = 'Load Weather Data (Error)'
}

export class LoadWeatherData implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherData;

    constructor(public payload?: string) {}
}


export class LoadWeatherDataSuccess implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherDataSuccess;

    constructor(public payload: WeatherData) {}
}

export class LoadWeatherDataError implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherDataError;

    constructor(public payload: WeatherData) {}
}

export type WeatherActions = 
    | LoadWeatherData
    | LoadWeatherDataSuccess
    | LoadWeatherDataError;