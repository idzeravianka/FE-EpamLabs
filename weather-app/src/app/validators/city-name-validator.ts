import { AbstractControl } from '@angular/forms'
import { Observable, timer } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'

export const validateCorrectCityName = (service) => {
    return (control: AbstractControl) => {    
      return timer(800).pipe(
        switchMap(() => service.checkCorrectCity(control.value)),
        map(res => res ? null: {s: 's'})
      )
    }
  }