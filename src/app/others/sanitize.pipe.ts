import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizePipe implements PipeTransform {
  constructor(private sanitize:DomSanitizer){
    
  }

  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitize.bypassSecurityTrustHtml(value);
  }

}
