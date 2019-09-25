import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let weatherFacade: WeatherDataFacade;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule, 
        FormsModule, 
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ SearchFormComponent ],
      providers: [ WeatherDataFacade ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    weatherFacade = fixture.debugElement.injector.get(WeatherDataFacade);
    spy = spyOn(weatherFacade, 'searchWeather');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call facade', () => {
    component.searchFormControl.controls.cityControl.setValue('minsk');
    component.searchCity();
    expect(spy.calls.any()).toBeTruthy();
  });
  
});
