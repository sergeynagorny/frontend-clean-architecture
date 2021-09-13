import { currentDatetime } from "../lib/datetime";
import { Cart } from "./cart";
import { totalPrice } from "./product";
import { User } from "./user";

export type OrderStatus = 'new' | 'delivery' | 'completed'

export type Order = {
    user: UniqueId // Если здесь будет string, будет не совсем понятно, что это: name, email?
    cart: Cart
    created: DateTimeString
    status: OrderStatus
    total: PriceCents
}

export function createOrder(user: User, cart: Cart): Order {
    return {
        cart,
        user: user.id,
        status: "new",
        created: currentDatetime(),
        total: totalPrice(cart.products),
    };
}
