import { User } from './user'
import { Chat } from './chat'
import { Game } from './game'
import { Audio } from './audio'
import { Venue } from './venue'
import { Video } from './video'
import { Voice } from './voice'
import { Contact } from './contact'
import { Invoice } from './invoice'
import { Sticker } from './sticker'
import { Document } from './document'
import { Location } from './location'
import { PhotoSize } from './photo-size'
import { VideoNote } from './video-note'
import { MessageEntity } from './message-entity'
import { SuccessfulPayment } from './successful-payment'

export interface Message {
    message_id: number
    from?: User
    date: number
    chat: Chat
    forward_from?: User
    forward_from_chat?: Chat
    forward_from_message_id?: number
    forward_date?: number
    reply_to_message?: Message
    edit_date?: number
    text: string
    entities?: MessageEntity[]
    audio?: Audio
    document?: Document
    game?: Game
    photo?: PhotoSize[]
    sticker?: Sticker
    video?: Video
    voice?: Voice
    video_note?: VideoNote
    new_chat_members?: User[]
    caption?: string
    contact?: Contact
    location?: Location
    venue?: Venue
    new_chat_member?: User
    left_chat_member?: User
    new_chat_title?: string
    new_chat_photo?: PhotoSize[]
    delete_chat_photo?: boolean
    group_chat_created?: boolean
    supergroup_chat_created?: boolean
    channel_chat_created?: boolean
    migrate_to_chat_id?: number
    migrate_from_chat_id?: number
    pinned_message?: Message
    invoice?: Invoice
    successful_payment?: SuccessfulPayment
}