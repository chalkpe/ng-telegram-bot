import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'prettyJson'})
export class PrettyJsonPipe implements PipeTransform {
  transform(value: any, count = 2): string {
    return JSON.stringify(value, null, count)
  }
}