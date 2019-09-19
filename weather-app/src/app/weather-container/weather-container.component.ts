import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherData } from '../model';

@Component({
  selector: 'weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherContainerComponent implements OnInit {

  @Input() weatherData: WeatherData;

  constructor() { }

  ngOnInit() {}

}
