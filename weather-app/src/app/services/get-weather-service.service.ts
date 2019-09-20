import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { navigatorToken } from './navigator.token';

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

  private getLocation(): Observable<any> {
    return new Observable(obs => {
      this.navigator.geolocation.getCurrentPosition(
        success => {
          obs.next(success);
          obs.complete();
        }
      );
    });
  }
}
