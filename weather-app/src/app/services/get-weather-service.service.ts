import { Injectable } from '@angular/core';
import { WeatherData } from '../model';
import { WeatherDataFacade } from '../../store/weather.facade';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, switchMap, take, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherServiceService {
  public weatherData: WeatherData = {
    city: '',
    temperature: 0
  };

  constructor(private weatherFacade: WeatherDataFacade, private http: HttpClient) { }

  public getWeather() {
    return this.getLocation().pipe(
      switchMap((res: any): any => {
        let lat = res.coords.latitude;
        let lon = res.coords.longitude;
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`)
      })
    );
  }

  public searchWeather(city: string){
    console.log(city);
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`)
  }

  public getLocation(): Observable<any> {
    return new Observable(obs => {
      navigator.geolocation.getCurrentPosition(
        success => {
          obs.next(success);
          obs.complete();
        },
        error => {
          obs.error(error);
        }
      );
    });
  }
}
