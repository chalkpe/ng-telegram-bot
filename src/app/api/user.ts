export class User {
    id: number
    first_name: string
    last_name?: string
    username?: string
    language_code ?: string

    get firstName() {
        return this.first_name.trim()
    }

    get lastName() {
        return (this.last_name || '').trim()
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim()
    }
}