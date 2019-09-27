import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Directive({
  selector: '[weatherDerective]'
})
export class WeatherDerectiveDirective implements OnChanges {
  private _currenColor: number;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  @Input() set addColor(temperature: number) {
    this._currenColor = temperature;
  }

  changeColor(): void {
    if (this._currenColor <= 15) {
      this._renderer.addClass(this._elementRef.nativeElement, 'cold-weather');
    } else {
      this._renderer.addClass(this._elementRef.nativeElement, 'hot-weather');
    }
  }

  ngOnChanges() { //xz
    this.changeColor();
  }
}