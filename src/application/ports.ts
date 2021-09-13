import { User, UserName } from "../domain/user";
import { Cart } from "../domain/cart";
import { Order } from "../domain/order";

export interface UserStorageService {
    user?: User
    updateUser(user: User): void;
}

export interface CartStorageService {
    cart: Cart
    updateCart(cart: Cart): void
    emptyCart(): void
}

export interface OrderStorageService {
    orders: Order[]
    updateOrders(orders: Order[]): void
}

export interface AuthenticationService {
    auth(name: UserName, email: Email): Promise<User>
}

export interface NotificationService {
    notify(message: string): void
}

export interface PaymentService {
    tryPay(amount: PriceCents): Promise<boolean>
}
