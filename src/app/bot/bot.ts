import { GetMe } from '../api/get-me'

export class Bot implements GetMe {
    token: string

    id: number
    first_name: string
    username: string
}