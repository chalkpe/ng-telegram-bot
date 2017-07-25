import { Pipe, PipeTransform } from '@angular/core';
import { PhotoSize } from '../api/photo-size'

@Pipe({name: 'tgPhoto'})
export class PhotoPipe implements PipeTransform {
  transform(value: PhotoSize[]): PhotoSize {
    return value[Math.max(0, value.length - 2)]
  }
}