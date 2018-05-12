import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, property: string): any {
    if (value.length === 0 || filterString.trim() === '') {
      return value;
    }
    const ret = [];
    for (const item of value) {
      if (item[property] === filterString) {
        ret.push(item);
      }
    }
    return ret;
  }

}
