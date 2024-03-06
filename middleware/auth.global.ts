export default defineNuxtRouteMiddleware((to, from) => {
  const jwt = useAccessToken();

  const isLoggedIn = computed(() => !!jwt.value);

  if (!to.meta.public) {
    // the route is not public
    if (!isLoggedIn.value) {
      //  the user not signed in
      return navigateTo({ name: "signin", query: { redirect: to.fullPath } });
    }
  }

  if (to.meta.public) {
    // the route is public
    if (isLoggedIn.value) {
      //  the user signed in
      return navigateTo({ name: "index" });
    }
  }
});
