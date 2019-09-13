import { TestBed } from '@angular/core/testing';

import { GetWeatherServiceService } from './get-weather-service.service';

describe('GetWeatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeatherServiceService = TestBed.get(GetWeatherServiceService);
    expect(service).toBeTruthy();
  });
});
