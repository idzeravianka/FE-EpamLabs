import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadCurrentCity, LoadCurrentCitySuccess, LoadCurrentCityError} from './currentCity.action';
import { currentCityQuery } from './curretnCity.selectors';
import { CurrentCityState } from './interfaces';

@Injectable()
export class CurrentCityDataFacade{
    public currentCityData$ = this.store.select(currentCityQuery.getCurrentCityData);

    constructor(private store: Store<CurrentCityState>) {}
}