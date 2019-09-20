import { TestBed } from '@angular/core/testing';

import { ValidationDataService } from './validation-data.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ValidationDataService', () => {
  let service: ValidationDataService;
  let httpTestingCintroler: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ValidationDataService,
      ]
    })
  });

  beforeEach(() => {
    service = TestBed.get(ValidationDataService);
    httpTestingCintroler = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return success of request', (done) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=mogilëv&units=metric&appid=5e172bca01d919aeab3be36d301d92f8';
    const mockData = {
      cod: "200"
    }
    service.checkCorrectCity('mogilëv').subscribe((response: any) => {
      expect(response).toEqual(true);
      done();
    })

    const req = httpTestingCintroler.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  })

  it('should be return error of request', (done) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=mmogilëv&units=metric&appid=5e172bca01d919aeab3be36d301d92f8';
    const mockData = {
      cod: "400"
    }
    service.checkCorrectCity('mmogilëv').subscribe((response: any) => {
      expect(response).toEqual(false);
      done();
    })
    const req = httpTestingCintroler.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData, {status: 400, statusText: 'Bad Request'});
  })
});
