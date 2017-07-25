import { ChatPhoto } from './chat-photo'

export class Chat {
    id: number
    type: string
    title?: string
    username?: string
    first_name?: string
    last_name?: string
    all_members_are_administrators?: boolean
    photo?: ChatPhoto
    description?: string
    invite_link?: string

    get name() {
        if (this.title) return this.title
        if (!this.last_name) return this.first_name
        return this.first_name + ' ' + this.last_name
    }
}