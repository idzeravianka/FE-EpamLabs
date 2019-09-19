import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturePipe'
})
export class TemperaturePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value > 0){
      return `+${value} ℃`;
    } else {
      return `${value} ℃`;
    }
  }

}
