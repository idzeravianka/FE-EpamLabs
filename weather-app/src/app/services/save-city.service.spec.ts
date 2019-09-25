import { TestBed } from '@angular/core/testing';

import { SaveCityService } from './save-city.service';

describe('SaveCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveCityService = TestBed.get(SaveCityService);
    expect(service).toBeTruthy();
  });
});
