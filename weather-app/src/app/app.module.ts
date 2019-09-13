import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '../store/store.config';
import { WeatherDataFacade } from 'src/store';
import { WeatherEffects } from 'src/store/weather.effects';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDerectiveDirective } from './weather-container/weather-derective.directive';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherDerectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('weatherDataState', reducers.weather, {}),
    EffectsModule.forRoot([
      WeatherEffects
    ]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [WeatherDataFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
