import { User } from "../domain/user";
import { Cart } from "../domain/cart";
import { createOrder } from "../domain/order";
import { NotificationService, OrderStorageService, PaymentService } from "./ports";

const payment: PaymentService = {}
const notifier: NotificationService = {}
const orderStorage: OrderStorageService = {}

async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart)
    const paid = await payment.tryPay(order.total)
    if (!paid) return notifier.notify('Something went wrong!')

    const {orders} = orderStorage
    orderStorage.updateOrders([...orders, order])
}
