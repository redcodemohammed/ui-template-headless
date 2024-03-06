import { useAuthStore } from "~/stores/auth";

export const useAuth = () => {
  const API = "/auth";

  const authStore = useAuthStore();
  const { $api } = useNuxtApp();

  const isAuthenticated = computed(() => {
    return !!authStore.accessToken;
  });

  async function signin(uid: string, password: string) {
    const route = useRoute("signin");

    const response = await $api<SignInResponse>(`${API}/signin`, {
      method: "POST",
      body: JSON.stringify({ uid, password }),
    });

    if (response.success) {
      authStore.accessToken = response.data.token;
      await fetchUser();

      const from = route.query.redirect as string;

      if (from) {
        navigateTo(from);
      } else {
        navigateTo("/");
      }
    }
  }

  async function signup(user: { email: string; username: string; password: string }) {
    const route = useRoute("signup");

    const response = await $api<SignUpResponse>(`${API}/signup`, {
      method: "POST",
      body: JSON.stringify(user),
    });

    if (response.success) {
      authStore.accessToken = response.data.token;
      await fetchUser();

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

  async function sendVerificationEmail() {
    const response = await $api(`/verify-email/send`, { method: "POST" });

    return response;
  }

  function logout() {
    $api(`${API}/logout`, { method: "POST" });

    authStore.accessToken = "";
    authStore.currentUser = null;

    navigateTo("/signin");
  }

  return {
    isAuthenticated,
    accessToken: authStore.accessToken,
    currentUser: authStore.currentUser,
    signin,
    signup,
    fetchUser,
    logout,
    sendVerificationEmail,
  };
};
