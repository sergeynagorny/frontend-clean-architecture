import { UserName } from "domain/user";
import { useUserStorage } from "services/storage-adapter";
import { useAuth } from "services/auth-adapter";
import { AuthenticationService, UserStorageService } from "./ports";

export function useAuthenticate() {
  const storage: UserStorageService = useUserStorage();
  const auth: AuthenticationService = useAuth();

  async function authenticate(name: UserName, email: Email): Promise<void> {
    const user = await auth.auth(name, email);
    storage.updateUser(user);
  }

  return {
    user: storage.user,
    authenticate,
  };
}
