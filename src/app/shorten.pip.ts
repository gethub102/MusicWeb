import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPip implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.slice(0, limit) + '... ';
    }
    return value;
  }

}
