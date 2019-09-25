import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContainerComponent } from './weather-container.component';
import { StoreModule } from '@ngrx/store';
import { WeatherDerectiveDirective } from '../derectives/weather-derective.directive';
import { TemperaturePipePipe } from '../pipes/temperature-pipe.pipe';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [ 
        WeatherContainerComponent,
        WeatherDerectiveDirective,
        TemperaturePipePipe,
      ],
      providers: [WeatherDataFacade]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   component.weatherData = WeatherData({city: 'test', temperature: 0});
  //   expect(component.weatherData = {city: 'test', temperature: 0}).toBeTruthy();
  // });
});
