import { useAuthStore } from "~/stores/auth";

export const useAuth = () => {
  const API = "/auth";

  const authStore = useAuthStore();
  const { $api } = useNuxtApp();

  const isAuthenticated = computed(() => {
    return !!authStore.accessToken;
  });

  async function login(uid: string, password: string) {
    const route = useRoute("login");

    const response = await $api<SignInResponse>(`${API}/signin`, {
      method: "POST",
      body: JSON.stringify({ uid, password }),
    });

    if (response.success) {
      authStore.accessToken = response.data.token;
      const user = await fetchUser();

      const from = route.query.redirect as string;

      if (from) {
        navigateTo(from);
      } else {
        navigateTo("/");
      }
    }
  }

  async function fetchUser() {
    const response = await $api<MeResponse>(`${API}/me`);

    if (response.success) {
      authStore.currentUser = response.data;
    }

    return response;
  }

  function logout() {
    $api(`${API}/logout`, { method: "POST" });

    authStore.accessToken = "";
    authStore.currentUser = null;

    navigateTo("/login");
  }

  return {
    isAuthenticated,
    login,
    fetchUser,
    logout,
  };
};
