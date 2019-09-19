import { TestBed, inject, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { GetWeatherServiceService } from './get-weather-service.service';
import { StoreModule } from '@ngrx/store';
import { navigatorToken } from './navigator.token';

describe('GetWeatherServiceService', () => {
  let service: GetWeatherServiceService;
  let httpTestingCintroler: HttpTestingController
  const navigatorMock = {
    geolocation: {
      getCurrentPosition: (success) =>{
          success({coords: {latitude: 53.8974658, longitude: 30.3414363}});
      }
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      providers: [
        GetWeatherServiceService,
        { provide: navigatorToken, useValue: navigatorMock }
      ]
    })
  });

  beforeEach(() => {
    service = TestBed.get(GetWeatherServiceService);
    httpTestingCintroler = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([GetWeatherServiceService], (service: GetWeatherServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should be return correct city using city name', (done: DoneFn) => {
    const mockCity = 'Mogilëv';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=mogilëv&units=metric&appid=5e172bca01d919aeab3be36d301d92f8';
    const mockData = {
      city: {
        name: 'Mogilëv'
      }
    }
    service.searchWeather('mogilëv').subscribe((response: any): any => {
      expect(response.city.name).toBe(mockCity);
      done();
    })

    const req = httpTestingCintroler.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });

  it('should be return correct city using coordinates', (done: DoneFn) => {

    const mockCity = 'Mogilëv';
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=53.8974658&lon=30.3414363&units=metric&appid=5e172bca01d919aeab3be36d301d92f8';
    const mockData = {
      city: {
        name: 'Mogilëv'
      }
    }

    service.getWeather().subscribe((response: any): any => {
      expect(response.city.name).toBe(mockCity);
      done();
    });

    const req = httpTestingCintroler.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});