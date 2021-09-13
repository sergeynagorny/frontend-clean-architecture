import { User } from "domain/user";
import { Cart } from "domain/cart";
import { createOrder } from "domain/order";
import { useNotification } from "services/notification-adapter";
import { usePayment } from "services/payment-adapter";
import { useCartStorage, useOrdersStorage } from "services/storage-adapter";
import {
  CartStorageService,
  NotificationService,
  OrdersStorageService,
  PaymentService,
} from "./ports";

export function useOrderProducts() {
  const payment: PaymentService = usePayment();
  const notifier: NotificationService = useNotification();
  const orderStorage: OrdersStorageService = useOrdersStorage();
  const cartStorage: CartStorageService = useCartStorage();

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart);
    const paid = await payment.tryPay(order.total);
    if (!paid) return notifier.notify("Something went wrong!");

    const { orders } = orderStorage;
    orderStorage.updateOrders([...orders, order]);
    cartStorage.emptyCart();
  }

  return { orderProducts };
}
