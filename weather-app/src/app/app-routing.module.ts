import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { CurrentWeatherUsingLocationComponent } from './current-weather-using-location/current-weather-using-location.component';

const childrenRoutes: Routes = [
  { path: 'city/:id', component: CurrentWeatherComponent },
  { path: 'city', component: CurrentWeatherUsingLocationComponent }
];

const routes: Routes = [
  { path: '', component: WeatherContainerComponent, children: childrenRoutes },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
