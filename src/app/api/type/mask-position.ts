import { MaskPositionPoint } from './enum/mask-position-point'

export interface MaskPosition {
    point: MaskPositionPoint
    x_shift: number
    y_shift: number
    zoom: number
}