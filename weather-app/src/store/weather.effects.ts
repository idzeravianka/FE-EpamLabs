import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, delay, mapTo } from 'rxjs/operators';
import { WeatherDataFacade } from './weather.facade';
import * as weatherActions from './weather.action';
import { WeatherData } from 'src/app/model';
import { GetWeatherServiceService } from 'src/app/services/get-weather-service.service';

@Injectable()
export class WeatherEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private weatherFacade: WeatherDataFacade,
        private getWeatherService: GetWeatherServiceService
    ) { }

    @Effect()
    public loadWeather$: Observable<any> = this.actions$.pipe(
        ofType<weatherActions.LoadWeatherData>(weatherActions.WeatherActionTypes.LoadWeatherData),
        switchMap((): any => {
            return this.getWeatherService.getWeather().pipe(
                map((resp: any) => {
                    return new weatherActions.LoadWeatherDataSuccess({city: resp.city.name, temperature: resp.list[0].main.temp});
                })
            )
        })
    );
}