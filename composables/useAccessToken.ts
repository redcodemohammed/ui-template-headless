import { useAuthStore } from "~/stores/auth";

export const useAccessToken = () => {
  const { accessToken } = storeToRefs(useAuthStore());

  return accessToken;
};
