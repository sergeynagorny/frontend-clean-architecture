import { CartStorageService, NotificationService } from "./ports";
import { hasAllergy, User } from "domain/user";
import { Product } from "domain/product";
import { addProduct } from "domain/cart";
import { useCartStorage } from "services/storage-adapter";
import { useNotification } from "services/notification-adapter";

export function useAddToCart() {
  const storage: CartStorageService = useCartStorage();
  const notifier: NotificationService = useNotification();

  async function addToCart(user: User, product: Product) {
    const warning = "This cookie is dangerous to your health! 😱";
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));
    if (isDangerous) return notifier.notify(warning);

    const { cart } = storage;
    const updated = addProduct(cart, product);
    storage.updateCart(updated);
  }

  return { addToCart };
}
