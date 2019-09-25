import { CurrentCityActionTypes, CurrentCityActions } from './currentCity.action';
import { initialState } from './currentCity.initial';
import { CurrentCityState } from './interfaces';

export const currentCityReducer = (
    state: CurrentCityState = initialState,
    action: CurrentCityActions
): CurrentCityState => {
    switch (action.type){
        case CurrentCityActionTypes.LoadCurrentCity:
            return{
                ...state
            };
        case CurrentCityActionTypes.LoadCurrentCitySuccess:
            return{
                ...state
            };
        case CurrentCityActionTypes.LoadCurrentCityError:
            return{
                ...state
            };
        default: return state;
    }
}