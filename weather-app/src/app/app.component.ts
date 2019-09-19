import { Component, OnInit } from '@angular/core';
import { WeatherData } from './model';
import { WeatherDataFacade } from 'src/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public weatherData$: Observable<WeatherData>;

  constructor(private weatherFacade: WeatherDataFacade) {}

  ngOnInit(){
    this.weatherData$ = this.weatherFacade.weather$;
    this.weatherFacade.loadWeather();
  }
}
