import { useAuthStore } from "~/stores/auth";

export const useCurrentUser = () => {
  const { currentUser } = storeToRefs(useAuthStore());
  return currentUser;
};
