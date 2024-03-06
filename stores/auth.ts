import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth-store", () => {
  const accessToken = useCookie("accessToken");
  const currentUser = useState<IUser | null>("user", () => null);

  return {
    accessToken,
    currentUser,
  };
});
