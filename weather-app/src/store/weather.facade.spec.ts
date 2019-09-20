import { TestBed, async } from '@angular/core/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import * as weatherActions from './weather.action';
import { WeatherDataFacade } from './weather.facade';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherFacade', () => {
    let facade: WeatherDataFacade;
    let store: Store<any>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                StoreModule.forRoot({}),
                EffectsModule.forRoot([]),
            ],
            providers: [WeatherDataFacade]
        }).compileComponents().then(() => {
            store = TestBed.get(Store);
            facade = TestBed.get(WeatherDataFacade);
        });
    }));

    it('should create', () => {
        expect(facade).toBeTruthy();
    });

    it('should load weather with coordinates', ()=>{
        spyOn(store, "dispatch").and.callThrough();
        const action = new weatherActions.LoadWeatherData();
        facade.loadWeather();

        expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should load weather with city name', ()=>{
        spyOn(store, "dispatch").and.callThrough();
        const action = new weatherActions.SearchWeatherData('test');
        facade.searchWeather('test');
        expect(store.dispatch).toHaveBeenCalledWith(action);
    })
});