import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CurrentCityState } from './interfaces';

const getCurrentCityState = createFeatureSelector<CurrentCityState>('currentCityState');

const GetCurrentCityState = (state: CurrentCityState) => state.currentCityData;

const getCurrentCityData = createSelector(
    getCurrentCityState,
    GetCurrentCityState
)

export const currentCityQuery = {
    getCurrentCityData
}