import { Product } from "domain/product";
import { Cookie } from "ui";
import styles from "./front.module.css";
import { useProductsStorage } from "services/storage-adapter";

export function Front() {
  const { products } = useProductsStorage();

  return (
    <main>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {products.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
