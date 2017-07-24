import { Message } from './message'
import { InlineQuery } from './inline-query'
import { CallbackQuery } from './callback-query'
import { ShippingQuery } from './shipping-query'
import { PreCheckoutQuery } from './pre-checkout-query'
import { ChosenInlineResult } from './chosen-inline-result'

export interface Update {
    update_id: number
    message?: Message
    edited_message?: Message
    channel_post?: Message
    edited_channel_post?: Message
    inline_query?: InlineQuery
    chosen_inline_result?: ChosenInlineResult
    callback_query?: CallbackQuery
    shipping_query?: ShippingQuery
    pre_checkout_query?: PreCheckoutQuery
}