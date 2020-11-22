import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyfixed'
})
export class CurrencyPipe implements PipeTransform {

 

  transform(value: string, ...args: number[]): string {
    return value.slice(0,4);
  }

}
