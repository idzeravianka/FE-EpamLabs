import { weatherReducer } from './weather.reducer';
import * as weatherActions from './weather.action';
import { initialState } from './weather.initial';

describe('Weather Reducer', () => {

    it('should add a weather data to state', () => {
        const action = new weatherActions.LoadWeatherDataSuccess({ city: 'test', temperature: 0 });
        const result = weatherReducer(initialState, action);

        expect(result).toEqual({
            weather: {
                city: 'test',
                temperature: 0,
            }
        });
    });

    it('should add error weather data to state', () => {
        const action = new weatherActions.LoadWeatherDataError({ city: 'Not Found', temperature: 0});
        const result = weatherReducer(initialState, action);

        expect(result).toEqual({
            weather: {
                city: 'Not Found',
                temperature: 0,
            }
        })
    })

    it('should add weather data found to state', () => {
        const action = new weatherActions.SearchWeatherDataSuccess({ city: 'Search City', temperature: 0});
        const result = weatherReducer(initialState, action);

        expect(result).toEqual({
            weather:{
                city: 'Search City',
                temperature: 0
            }
        })
    })

    it('should add error weather data found to state', () => {
        const action = new weatherActions.SearchWeatherDataError({ city: 'Not Found City', temperature: 0});
        const result = weatherReducer(initialState, action);

        expect(result).toEqual({
            weather:{
                city: 'Not Found City',
                temperature: 0
            }
        })
    })

    it('should return default state', () => {
        const action = new weatherActions.LoadWeatherData();
        const result = weatherReducer(initialState, action);

        expect(result).toEqual({
            weather:{
                city: 'City',
                temperature: 0
            }
        })
    })

});