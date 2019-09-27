import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '../store/store.config';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';
import { WeatherEffects } from 'src/store/citiesWeatherData/weather.effects';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDerectiveDirective } from './derectives/weather-derective.directive';
import { TemperaturePipePipe } from './pipes/temperature-pipe.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { CurrentWeatherUsingLocationComponent } from './current-weather-using-location/current-weather-using-location.component';
import { CurrentCityDataFacade } from 'src/store/currentCityWeatherData/currentCity.facade';
import { CurrentCityDataEffects } from 'src/store/currentCityWeatherData/currentCity.efects';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherDerectiveDirective,
    TemperaturePipePipe,
    SearchFormComponent,
    CurrentWeatherComponent,
    WeatherCardComponent,
    CityWeatherComponent,
    CurrentWeatherUsingLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('citiesWeatherDataState', reducers.citiesWeatherData, {}),
    StoreModule.forFeature('currentCityState', reducers.currentCityState, {}),
    EffectsModule.forRoot([
      WeatherEffects,
      CurrentCityDataEffects
    ]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [WeatherDataFacade, CurrentCityDataFacade
    //{provide: navigatorToken, useValue: navigatorToken}
  ],
  bootstrap: [AppComponent],
  // schemas:[ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
