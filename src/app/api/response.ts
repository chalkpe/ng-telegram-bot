export interface Response<T> {
    ok: boolean
    result?: T
    error_code?: number
    description?: number
}