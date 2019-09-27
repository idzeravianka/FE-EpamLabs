import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import * as weatherActions from './currentCity.action';
import { GetWeatherServiceService } from 'src/app/services/get-weather-service.service';

@Injectable()
export class CurrentCityDataEffects{

    constructor(
        private _action$: Actions,
        private  _getWeatherService: GetWeatherServiceService
    ) {}

    @Effect()
    public loadWeather$: Observable<any> = this._action$.pipe(
        ofType<weatherActions.LoadCurrentCity>(weatherActions.CurrentCityActionTypes.LoadCurrentCity),
        switchMap((): any => {
            return this._getWeatherService.getWeather().pipe(
                map((resp: any) => {
                    return new weatherActions.LoadCurrentCitySuccess({ city: resp.city.name, description: resp.list[0].weather[0].description, icon:resp.list[0].weather[0].icon, temperature: resp.list[0].main.temp });
                }),
                catchError((): any => {
                    return of(new weatherActions.LoadCurrentCityError({ city: 'Not Found', description:'', icon:'', temperature: 0 }));
                })
            )
        })
    );
}