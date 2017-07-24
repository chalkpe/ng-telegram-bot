import { User } from './user'
import { Location } from './location'

export interface ChosenInlineResult {
    result_id: string
    from: User
    location?: Location
    inline_message_id?: string
    query: string
}