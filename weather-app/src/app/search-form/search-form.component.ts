import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { WeatherDataFacade } from 'src/store/citiesWeatherData/weather.facade';
import { ValidationDataService } from '../services/validation-data.service';
import { validateCorrectCityName } from '../validators/city-name-validator';
import { debounceTime, switchMap, map, distinctUntilChanged } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { resolve } from 'q';
import { SaveCityService } from '../services/save-city.service';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public searchFormControl: FormGroup;

  constructor(
    private _weatherFacade: WeatherDataFacade, 
    private _validationService: ValidationDataService,
    private _saveCityService: SaveCityService) {
    this.searchFormControl = new FormGroup({
      "cityControl": new FormControl('', [Validators.minLength(5) ,Validators.required], validateCorrectCityName(this._validationService)),
    })
  }

  ngOnInit() {
    // this.searchFormControl.statusChanges.pipe().subscribe(status => console.log(status));
  }

  public searchCity(): void {
    this._weatherFacade.searchWeather(this.searchFormControl.controls.cityControl.value);
    this.searchFormControl.controls.cityControl.setValue('');
  }

  public addCityToLocalStorage(){
    this._saveCityService.saveCityToLocalStorage(this.searchFormControl.controls.cityControl.value);
    this.searchFormControl.controls.cityControl.setValue('');
  }
}