import { Injectable, Inject } from '@angular/core';
import { WeatherData } from '../model';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, distinctUntilChanged, map, debounceTime } from 'rxjs/operators';
import { Observable, of, from, timer, throwError } from 'rxjs';
import { navigatorToken } from './navigator.token';
import { isFulfilled } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherServiceService {

  constructor(private http: HttpClient, @Inject(navigatorToken) private navigator: Navigator) { }

  public getWeather() {
    return this.getLocation().pipe(
      switchMap((res: any): any => {
        let lat = res.coords.latitude;
        let lon = res.coords.longitude;
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`)
      })
    );
  }

  public searchWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`)
  }

  public checkCorrectCity(city: string) {
      return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`).pipe(
        debounceTime(500),
        map((response: any) => {
          if(response.cod === "200"){
            return true;
          } else {
            return false
          }
        }),
        catchError(() => {
          return of(false)
        })
      );
  }


  // public checkCorrectCity(city: string) {
  //   if (city != '') {
  //     return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`).pipe(
  //       catchError((error) => {
  //         return of({cod:404, message: "Not Found"});
  //       })
  //     );
  //   }
  //   return of({cod:404, message: "Not Found"});
  // }

  private getLocation(): Observable<any> {
    return new Observable(obs => {
      this.navigator.geolocation.getCurrentPosition(
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
