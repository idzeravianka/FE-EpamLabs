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
import { WeatherDataFacade } from 'src/store';
import { WeatherEffects } from 'src/store/weather.effects';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDerectiveDirective } from './derectives/weather-derective.directive';
import { TemperaturePipePipe } from './pipes/temperature-pipe.pipe';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherContainerComponent,
    WeatherDerectiveDirective,
    TemperaturePipePipe,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('weatherDataState', reducers.weather, {}),
    EffectsModule.forRoot([
      WeatherEffects
    ]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [WeatherDataFacade, 
    //{provide: navigatorToken, useValue: navigatorToken}
  ],
  bootstrap: [AppComponent],
  // schemas:[ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
