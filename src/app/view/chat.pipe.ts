import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from '../api/chat'

@Pipe({name: 'tgChat'})
export class ChatPipe implements PipeTransform {
  transform(value: object): string {
    return Object.assign(new Chat(), value).name
  }
}