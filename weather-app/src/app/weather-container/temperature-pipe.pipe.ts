import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${value} ℃`;
  }

}
