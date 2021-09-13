import { FC, createContext, useContext, useState } from "react";
import { cookies } from "./fake-data";

const StoreContext = createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: FC = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
