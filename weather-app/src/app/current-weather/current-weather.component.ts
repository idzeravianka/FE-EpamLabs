import { Component, OnInit } from '@angular/core';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CurrentCityDataFacade } from 'src/store/currentCityWeatherData/currentCity.facade';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  private id: string;
  public currentCity: any;

  constructor(
    private _weatherFacade: WeatherDataFacade,
    // private _currentCityFacade: CurrentCityDataFacade,
    private _router: Router,
    private _activeRouter: ActivatedRoute
  ) { }

  cityWeather$;
  cityName;

  ngOnInit() {
    this.cityWeather$ = this._weatherFacade.cityWeather$;

    this.cityWeather$.subscribe(data => {
      debugger;
    })

    this._activeRouter.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(id => {
      if (id) {
        this.cityName = id;
      }
      // else {
      // }
        // this._weatherFacade.cityWeather$.subscribe(getWeatherByCityName => {
        //   this.currentCity = getWeatherByCityName(id);
          // cities.filter(city => {
          //   if (city.city == id) {
          //     this.currentCity = city;
          //   }
          // })
          // if (!this.currentCity) {
          //   this._router.navigate(['/city']);
          // }
          // console.log(cities)
        // });
      // } else {

      // }
      // this.id = id; console.log(id)
    });
  }
}
