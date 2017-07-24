import { User } from './user'
import { ShippingAddress } from './shipping-address'

export interface ShippingQuery {
    id: string
    from: User
    invoice_payload: string
    shipping_address: ShippingAddress
}