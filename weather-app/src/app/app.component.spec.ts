import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WeatherContainerComponent } from './weather-container/weather-container.component';
import { WeatherDerectiveDirective } from './derectives/weather-derective.directive';
import { TemperaturePipePipe } from './pipes/temperature-pipe.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherDataFacade } from 'src/store/weather.facade';
import { StoreModule } from '@ngrx/store';
import { componentFactoryName } from '@angular/compiler';
import { GetWeatherServiceService } from './services/get-weather-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
      ],
      declarations: [
        AppComponent,
        WeatherContainerComponent,
        WeatherDerectiveDirective,
        TemperaturePipePipe,
        SearchFormComponent
      ],
      providers: [WeatherDataFacade],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should trigger Facade', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // app.weatherData$
  });
});
