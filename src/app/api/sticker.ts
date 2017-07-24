import { PhotoSize } from './photo-size'
import { MaskPosition } from './mask-position'

export class Sticker {
    file_id: string
    width: number
    height: number
    thumb?: PhotoSize
    emoji?: string
    set_name?: string
    mask_position?: MaskPosition
    file_size?: number
}