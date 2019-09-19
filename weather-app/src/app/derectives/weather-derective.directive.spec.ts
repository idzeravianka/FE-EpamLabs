import { WeatherDerectiveDirective } from './weather-derective.directive';
import { Component, Renderer2, Type } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: `<div id="someId" weatherDerective addColor={{weatherData}}></div>`,
})
class TestContainerComponent{
  public weatherData: number;

  constructor(){}
}

describe('WeatherDerectiveDirective', () => {
  let container, fixture: ComponentFixture<TestContainerComponent>, renderer2, directive;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContainerComponent, WeatherDerectiveDirective],
      providers: [Renderer2]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContainerComponent);
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    container = fixture.componentInstance;    
    directive = new WeatherDerectiveDirective(container, renderer2);

  })

  it('should create an instance', () => {
    const directive = new WeatherDerectiveDirective(container, renderer2);
    expect(directive).toBeTruthy();
  });

  it('should change color in weather container', () => {
    container.weatherData = 7;

    fixture.detectChanges();

    const color = fixture.debugElement.nativeElement.querySelector('#someId').style.backgroundColor
    expect(color).toBe('blue');
  });

  
  it('should change color in weather container', () => {
    container.weatherData = 28;

    fixture.detectChanges();

    const color = fixture.debugElement.nativeElement.querySelector('#someId').style.backgroundColor
    expect(color).toBe('red');
  });
});