import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { empty, of, throwError } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { WeatherEffects } from './weather.effects';
import * as weatherActions from './weather.action';
import { GetWeatherServiceService } from 'src/app/services/get-weather-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Actions } from '@ngrx/effects';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe('RouterHistoryEffects', () => {
    let actions$: TestActions;
    let effects: WeatherEffects;
    let action: weatherActions.WeatherActions;
    let getWeatherService: GetWeatherServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WeatherEffects,
                provideMockActions(() => actions$),
                GetWeatherServiceService,
                { provide: Actions, useFactory: getActions },
            ],
            imports: [
                HttpClientModule,
            ]
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(WeatherEffects);
        getWeatherService = TestBed.get(GetWeatherServiceService);
    });

    it('should be created', async () => {
        expect(effects).toBeTruthy();
    });

    it('should return a LoadWeatherDataSuccess action', () => {
        const action = new weatherActions.LoadWeatherData();
        const outcome = new weatherActions.LoadWeatherDataSuccess({ city: 'someCity', temperature: 0 });

        actions$.stream = hot('-a|', { a: action });
        const expected = cold('-b|', { b: outcome });

        spyOn(getWeatherService, 'getWeather').and.returnValue(
            of({
                city: {
                    name: 'someCity'
                },
                list: [
                    {
                        main: {
                            temp: 0
                        }
                    }
                ]
            }))

        expect(effects.loadWeather$).toBeObservable(expected);
    });

    it('should return a SearchWeatherDataSuccess action', () => {
        const action = new weatherActions.SearchWeatherData('someCity2');
        const outcome = new weatherActions.SearchWeatherDataSuccess({ city: 'someCity2', temperature: 0 });

        actions$.stream = hot('-a|', { a: action });
        const expected = cold('-b|', { b: outcome });

        spyOn(getWeatherService, 'searchWeather').and.returnValue(
            of({
                city: {
                    name: 'someCity2'
                },
                list: [
                    {
                        main: {
                            temp: 0
                        }
                    }
                ]
            })
        )

        expect(effects.searchWeather$).toBeObservable(expected);
    });

    it('should return a LoadWeatherDataError', () => {
        const action = new weatherActions.LoadWeatherData();
        const outcome = new weatherActions.LoadWeatherDataError({ city: 'Not Found', temperature: 0 });
        
        spyOn(getWeatherService, 'getWeather').and.returnValue(throwError(''));

        actions$.stream = hot('a|', { a: action });
        const expected = cold('b|', { b: outcome });

        expect(effects.loadWeather$).toBeObservable(expected);
    });

    it('should return a SearchWeatherDataError', () => {
        const action = new weatherActions.SearchWeatherData('sss');
        const outcome = new weatherActions.SearchWeatherDataError({ city: 'Not Found', temperature: 0 });
        
        spyOn(getWeatherService, 'searchWeather').and.returnValue(throwError(''));

        actions$.stream = hot('a|', { a: action });
        const expected = cold('b|', { b: outcome });

        expect(effects.searchWeather$).toBeObservable(expected);
    });
});