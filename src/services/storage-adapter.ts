import { useEffect } from "react";
import {
  UserStorageService,
  CartStorageService,
  OrdersStorageService,
  ProductsStorageService,
} from "application/ports";
import { createEffect, createEvent, restore } from "effector";
import { useStore } from "effector-react";
import { User } from "domain/user";
import { Cart } from "domain/cart";
import { Order } from "domain/order";
import { Product } from "domain/product";
import { fakeApi } from "./api";
import { cookies } from "./fake-data";

const updateUser = createEvent<User>();
const $user = restore(updateUser, null);

const updateCart = createEvent<Cart>();
const emptyCart = createEvent();
const $cart = restore(updateCart, { products: [] }).reset(emptyCart);

const updateOrders = createEvent<Order[]>();
const $orders = restore(updateOrders, []);

const updateProducts = createEvent<Product[]>();
const getProductsFx = createEffect<void, Product[]>(() => fakeApi(cookies));
const $products = restore(updateProducts, []).on(
  getProductsFx.doneData,
  (_, products) => products
);

export function useUserStorage(): UserStorageService {
  return {
    user: useStore($user),
    updateUser,
  };
}

export function useCartStorage(): CartStorageService {
  return {
    cart: useStore($cart),
    updateCart,
    emptyCart,
  };
}

export function useOrdersStorage(): OrdersStorageService {
  return {
    orders: useStore($orders),
    updateOrders,
  };
}

export function useProductsStorage(): ProductsStorageService {
  useEffect(() => {
    getProductsFx();
  }, []);

  return {
    products: useStore($products),
    updateProducts,
  };
}
