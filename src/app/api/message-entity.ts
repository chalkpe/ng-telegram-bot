import { User } from './user'

export interface MessageEntity {
    type: string
    offset: number
    length: number
    url?: string
    user?: User
}