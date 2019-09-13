import { Directive, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { WeatherDataFacade } from 'src/store';
import { WeatherData } from '../model';

@Directive({
  selector: '[weatherDerective]'
})
export class WeatherDerectiveDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private weatherFacade: WeatherDataFacade) {
   }

  @Input() set addColor(temperature: number) {
    if (temperature <= 15){
      this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'blue')
    }else{
      this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'red');
    }
  }
}
