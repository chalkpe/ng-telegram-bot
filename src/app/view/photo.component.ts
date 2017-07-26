import { Component, Input } from '@angular/core'

import { Bot } from '../bot/bot'
import { PhotoSize } from '../api/photo-size'

@Component({
  selector: 'tg-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {
  @Input() bot: Bot
  @Input() photo: PhotoSize[]
  @Input() caption: string

  i: number = 0
  static readonly fileIds: Map<string, string> = new Map()

  getFile(photo: PhotoSize) {
    const fileId = photo.file_id


    if (!PhotoComponent.fileIds.has(fileId)) {
      PhotoComponent.fileIds.set(fileId, `http://via.placeholder.com/${photo.width}x${photo.height}?text=Loading...`)
      
      this.bot.getFile(fileId).then(file =>
        PhotoComponent.fileIds.set(fileId, this.bot.fileBase + '/' + file.file_path))
    } 

    return PhotoComponent.fileIds.get(fileId)
  }
}