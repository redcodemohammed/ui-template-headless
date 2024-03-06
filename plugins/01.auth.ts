export default defineNuxtPlugin((nuxtApp) => {
  const auth = useAuth();

  return {
    provide: {
      auth,
    },
  };
});
