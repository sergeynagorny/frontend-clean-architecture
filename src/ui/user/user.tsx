import { Redirect } from "react-router-dom";
import { useUserStorage } from "services/storage-adapter";
import { Buy, Profile, Cart, Orders } from "ui";

export function User() {
  const { user } = useUserStorage();
  if (!user) return <Redirect to="/auth" />;

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}
