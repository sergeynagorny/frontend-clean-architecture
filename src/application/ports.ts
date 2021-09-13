import { User, UserName } from "domain/user";
import { Cart } from "domain/cart";
import { Order } from "domain/order";
import { Product } from "domain/product";

export interface UserStorageService {
  user: User | null;
  updateUser(user: User): void;
}

export interface CartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}

export interface ProductsStorageService {
  products: Product[];
  updateProducts(products: Product[]): void;
}

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface PaymentService {
  tryPay(amount: PriceCents): Promise<boolean>;
}
