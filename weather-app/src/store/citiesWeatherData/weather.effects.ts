import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, combineLatest } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { WeatherDataFacade } from './weather.facade';
import * as weatherActions from './weather.action';
import { GetWeatherServiceService } from 'src/app/services/get-weather-service.service';
import { CityWeatherData } from 'src/app/model';
import { Action } from '@ngrx/store';

@Injectable()
export class WeatherEffects {

    constructor(
        private actions$: Actions,
        private getWeatherService: GetWeatherServiceService
    ) { }

    @Effect()
    public loadWeather$: Observable<any> = this.actions$.pipe(
        ofType<weatherActions.LoadWeatherData>(weatherActions.WeatherActionTypes.LoadWeatherData),
        switchMap((): any => {
            return this.getWeatherService.getWeather().pipe(
                map((resp: any) => {
                    return new weatherActions.LoadWeatherDataSuccess({ city: resp.city.name, description: resp.list[0].weather[0].description, icon:resp.list[0].weather[0].icon, temperature: resp.list[0].main.temp });
                }),
                catchError((): any => {
                    return of(new weatherActions.LoadWeatherDataError({ city: 'Not Found', description:'', icon:'', temperature: 0 }));
                })
            )
        })
    );

    @Effect()
    public searchWeather$: Observable<any> = this.actions$.pipe(
        ofType<weatherActions.SearchWeatherData>(weatherActions.WeatherActionTypes.SearchWeatherData),
        mergeMap((city: any): any => {
            return this.getWeatherService.searchWeather(city.payload).pipe(
                map((resp: any) => {
                    return new weatherActions.SearchWeatherDataSuccess({ city: resp.city.name, description: resp.list[0].weather[0].description, icon:resp.list[0].weather[0].icon, temperature: resp.list[0].main.temp });
                }),
                catchError((): any => {
                    return of(new weatherActions.SearchWeatherDataError({ city: 'Not Found', description:'', icon:'', temperature: 0 }));
                })
            )
        })
    )

    @Effect()
    public searchWeatherFromStorage$: Observable<any> = this.actions$.pipe(
        ofType<weatherActions.SearchAllCitiesFromStorage>(weatherActions.WeatherActionTypes.SearchAllCitiesFromStorage),
        switchMap((cities: any): any => {
            return this.getWeatherService.searchWeatherFromaState(cities.payload).pipe(
                switchMap((resp: any) => {
                    let actions: Action[] = [];
                    resp.list.map(currentCity => {
                        actions.push(new weatherActions.SearchAllCitiesFromStorageSuccess({city: currentCity.name, description: currentCity.weather[0].description, icon:currentCity.weather[0].icon, temperature: currentCity.main.temp}));
                    })
                    return actions;
                }),
                catchError((): any => of())
            )
        })
    )
}