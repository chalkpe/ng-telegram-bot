import { Animation } from './animation'
import { PhotoSize } from './photo-size'
import { MessageEntity } from './message-entity'

export interface Game {
    title: string
    description: string
    photo: PhotoSize[]
    text?: string
    text_entities?: MessageEntity[]
    animation?: Animation
}