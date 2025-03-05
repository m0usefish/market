import { Colors } from "./colors"

export interface IProduct{
    id: string
    description: string
    name: string
    image: string
    price: number
    color: Colors
}