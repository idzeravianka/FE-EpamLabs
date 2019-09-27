import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {

  public cityWeather$: any;
  private cityId: string;
  private _routeUnsubscribe: Subscription;

  constructor(
    private _weatherFacade: WeatherDataFacade,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cityWeather$ = this._weatherFacade.cityWeather$;

    this._routeUnsubscribe = this._activeRouter.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(id => {
      if (id) {
        this.cityId = id;
      }
    });
  }

  ngOnDestroy(){
    this._routeUnsubscribe.unsubscribe();
  }
}
