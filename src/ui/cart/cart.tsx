import { totalPrice } from "domain/product";
import { useCartStorage } from "services/storage-adapter";
import { Cookie } from "ui";
import styles from "./cart.module.css";

export function Cart() {
  const { cart } = useCartStorage();

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product, i) => (
          <li key={product.id + i}>{<Cookie cookie={product} />}</li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  );
}
