import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../api/user'

@Pipe({name: 'tgUser'})
export class UserPipe implements PipeTransform {
  transform(value: object): string {
    return Object.assign(new User(), value).fullName
  }
}