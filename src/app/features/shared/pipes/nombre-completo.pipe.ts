import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})

export class NombreCompletoPipe implements PipeTransform {
  transform(value: {name: string, lastName: string}): string {
    if (!value) return '';
    return `${value.name} ${value.lastName}`
  }
}
