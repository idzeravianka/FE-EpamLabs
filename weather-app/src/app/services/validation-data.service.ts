import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, debounce, debounceTime, distinctUntilChanged, delay } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationDataService {

  constructor(private http: HttpClient) { }

  public checkCorrectCity(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5e172bca01d919aeab3be36d301d92f8`).pipe(
      map((response: any) => {
        if (response.cod === "200") {
          return true;
        }
      }),
      catchError(() => {
        return of(false);
      })
    );
  }
}
