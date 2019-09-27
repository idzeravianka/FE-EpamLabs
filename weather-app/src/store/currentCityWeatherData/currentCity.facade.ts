import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadCurrentCity } from './currentCity.action';
import { currentCityQuery } from './curretnCity.selectors';
import { CurrentCityState } from './interfaces';
import { tap } from 'rxjs/operators';

@Injectable()
export class CurrentCityDataFacade{
    public currentCityData$ = this.store.select(currentCityQuery.getCurrentCityData).pipe(
        tap(data => {
            if (!data){
                this.store.dispatch(new LoadCurrentCity());
            }
        })
    );

    constructor(private store: Store<CurrentCityState>) {}
}