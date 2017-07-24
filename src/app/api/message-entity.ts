import { User } from './user'
import { MessageEntityType } from './message-entity-type'

export interface MessageEntity {
    type: MessageEntityType
    offset: number
    length: number
    url?: string
    user?: User
}