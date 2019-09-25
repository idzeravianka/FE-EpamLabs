import { Action } from '@ngrx/store';
import { CurrentCityWeatherData } from 'src/app/model';

export enum CurrentCityActionTypes{
    LoadCurrentCity = 'Load Current City',
    LoadCurrentCitySuccess = 'Load Current City (Success)',
    LoadCurrentCityError = 'Load Current City (Error)'
}

export class LoadCurrentCity implements Action{
    public readonly type = CurrentCityActionTypes.LoadCurrentCity;

    constructor() {}
}

export class LoadCurrentCitySuccess implements Action{
    public readonly type = CurrentCityActionTypes.LoadCurrentCitySuccess;

    constructor(public payload: CurrentCityWeatherData) {}
}

export class LoadCurrentCityError implements Action{
    public readonly type = CurrentCityActionTypes.LoadCurrentCityError;

    constructor(public payload: CurrentCityWeatherData) {}
}

export type CurrentCityActions = 
    | LoadCurrentCity
    | LoadCurrentCitySuccess
    | LoadCurrentCityError;