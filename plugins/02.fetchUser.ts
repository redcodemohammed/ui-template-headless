export default defineNuxtPlugin((nuxtApp) => {
  const { $auth } = useNuxtApp();

  if ($auth.isAuthenticated.value) {
    $auth.fetchUser();
  }
});
