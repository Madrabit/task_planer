import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase',
  pure: true
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
  }

}
