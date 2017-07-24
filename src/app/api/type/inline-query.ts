import { User } from './user'
import { Location } from './location'

export interface InlineQuery {
    id: string
    from: User
    location?: Location
    query: string
    offset: string
}