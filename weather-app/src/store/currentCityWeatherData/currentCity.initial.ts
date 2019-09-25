import { CurrentCityState } from './interfaces';

export const initialState: CurrentCityState = {
    currentCityData: {
        city: '',
        description: '',
        icon: '',
        temperature: 0
    }
}