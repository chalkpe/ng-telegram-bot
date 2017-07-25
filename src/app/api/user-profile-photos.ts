import { PhotoSize } from './photo-size'

export interface UserProfilePhotos {
    total_count: number
    photos: PhotoSize[][]
}