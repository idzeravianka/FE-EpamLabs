import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherDataFacade } from 'src/store/weather.facade';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  public cityControl: FormControl;

  constructor(private _weatherFacade: WeatherDataFacade) { }

  ngOnInit() {
    this.cityControl = new FormControl('', Validators.minLength(5));
    // this.cityControl.valueChanges.subscribe((value) => console.log(value));
  }

  public searchCity(event): void{
    if (this.cityControl.valid){
      this._weatherFacade.searchWeather(this.cityControl.value);
      this.cityControl.setValue('');
    }
  }
}
