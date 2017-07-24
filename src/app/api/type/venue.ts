import { Location } from './location'

export interface Venue {
    location: Location
    title: string
    address: string
    foursquare_id?: string
}