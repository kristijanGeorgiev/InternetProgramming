import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split(' ').map(word => word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');
  }

}
