import { Action } from '@ngrx/store';
import { CityWeatherData } from 'src/app/model';

export enum WeatherActionTypes{
    LoadWeatherData = 'Load Weather Data',
    LoadWeatherDataSuccess = 'Load Weather Data (Success)',
    LoadWeatherDataError = 'Load Weather Data (Error)',
    SearchWeatherData = 'Search Weather Data',
    SearchWeatherDataSuccess = 'Search Weather Data (Success)',
    SearchWeatherDataError = 'Search Weather Data (Error)',
    SearchAllCitiesFromStorage = 'Search All Cities From State',
    SearchAllCitiesFromStorageSuccess = 'Search All Cities From State (Success)'
}

export class LoadWeatherData implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherData;

    constructor() {}
}

export class LoadWeatherDataSuccess implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherDataSuccess;

    constructor(public payload: CityWeatherData) {}
}

export class LoadWeatherDataError implements Action{
    public readonly type = WeatherActionTypes.LoadWeatherDataError;

    constructor(public payload: CityWeatherData) {}
}

export class SearchWeatherData implements Action{
    public readonly type = WeatherActionTypes.SearchWeatherData;

    constructor(public payload: string) {}
}

export class SearchWeatherDataSuccess implements Action{
    public readonly type = WeatherActionTypes.SearchWeatherDataSuccess;

    constructor(public payload: CityWeatherData) {}
}

export class SearchWeatherDataError implements Action{
    public readonly type = WeatherActionTypes.SearchWeatherDataError;

    constructor(public payload: CityWeatherData) {}
}

export class SearchAllCitiesFromStorage implements Action{
    public readonly type = WeatherActionTypes.SearchAllCitiesFromStorage;

    constructor(public payload: string[]){}
}

export class SearchAllCitiesFromStorageSuccess implements Action{
    public readonly type = WeatherActionTypes.SearchAllCitiesFromStorageSuccess;

    constructor(public payload: CityWeatherData){}
}

export type WeatherActions = 
    | LoadWeatherData
    | LoadWeatherDataSuccess
    | LoadWeatherDataError
    | SearchWeatherData
    | SearchWeatherDataSuccess
    | SearchWeatherDataError
    | SearchAllCitiesFromStorage
    | SearchAllCitiesFromStorageSuccess;