export default defineNuxtPlugin((nuxtApp) => {
  const jwt = useAccessToken();
  const { apiURL } = useRuntimeConfig().app;

  const api = $fetch.create({
    baseURL: apiURL,
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
        navigateTo({ name: "signin" });
      }
    },
  });

  return { provide: { api } };
});
