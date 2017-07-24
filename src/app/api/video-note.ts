import { PhotoSize } from './photo-size'

export class VideoNote {
    file_id: string
    length: number
    duration: number
    thumb?: PhotoSize
    file_size?: number
}