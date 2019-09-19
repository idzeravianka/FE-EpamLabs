import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { WeatherDataFacade } from 'src/store/weather.facade';
import { GetWeatherServiceService } from '../services/get-weather-service.service';
import { debounceTime, debounce, switchMapTo, switchMap, delay, map, mergeMap, distinctUntilChanged, catchError } from 'rxjs/operators';
import { timer, Subject, of, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public searchFormControl: FormGroup;

  constructor(private _weatherFacade: WeatherDataFacade, private _service: GetWeatherServiceService) {
    this.searchFormControl = new FormGroup({
      "cityControl": new FormControl('', [Validators.minLength(5), Validators.required], this.validateCorrectCityName.bind(this)),
    })
  }

  ngOnInit() {
    // this.searchFormControl.controls.cityControl.valueChanges.pipe(
    //   debounceTime(500),
    //   switchMap(() => {
    //     return this._service.checkCorrectCity(this.searchFormControl.controls.cityControl.value);
    //   })
    // ).subscribe((res:any) => {
    //   console.log(res);
    // })
  }

  validateCorrectCityName(control: AbstractControl){
    return this._service.checkCorrectCity(control.value).pipe(
      map(res => {console.log(res); return res})
    )
  }

  // ngOnInit() {
  //   this.searchFormControl.controls.cityControl.valueChanges.pipe(
  //     debounceTime(500),
  //     switchMap(() => {
  //       return this._service.checkCorrectCity(this.searchFormControl.controls.cityControl.value);
  //     })
  //   ).subscribe((res: any) => {
  //     if(res.cod === "200"){
  //       console.log('success')
  //     } else {
  //       console.log('error', res);
  //     }
  //   });
  // }

  public searchCity(): void {
    if (this.searchFormControl.valid) {
      this._weatherFacade.searchWeather(this.searchFormControl.controls.cityControl.value);
      this.searchFormControl.controls.cityControl.setValue('');
    }
  }
}
