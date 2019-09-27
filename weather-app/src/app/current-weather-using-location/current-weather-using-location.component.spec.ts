import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherUsingLocationComponent } from './current-weather-using-location.component';

describe('CurrentWeatherUsingLocationComponent', () => {
  let component: CurrentWeatherUsingLocationComponent;
  let fixture: ComponentFixture<CurrentWeatherUsingLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherUsingLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherUsingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
