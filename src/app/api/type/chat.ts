import { ChatType } from './chat-type'
import { ChatPhoto } from './chat-photo'

export interface Chat {
    id: number
    type: ChatType
    title?: string
    username?: string
    first_name?: string
    last_name?: string
    all_members_are_administrators?: boolean
    photo?: ChatPhoto
    description?: string,
    invite_link?: string
}