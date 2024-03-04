export default defineNuxtPlugin((nuxtApp) => {
  // const { session } = useUserSession();
  const jwt = useCookie("jwt");

  const api = $fetch.create({
    onRequest({ request, options }) {
      if (jwt.value) {
        // Add Authorization header
        options.headers = options.headers || {};
        Object.assign(options.headers, {
          Authorization: `Bearer ${jwt.value}`,
        });
      }
    },

    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo({ name: "login" });
      }
    },
  });

  return { provide: { api } };
});
