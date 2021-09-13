import { Product } from "domain/product";
import { useStore } from "services/store";
import { Cookie } from "ui";
import styles from "./front.module.css";

export function Front() {
  const { cookies } = useStore();

  return (
    <main>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
