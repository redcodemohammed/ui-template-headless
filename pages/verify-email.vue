<script lang="ts" setup>
const route = useRoute("verify-email");
const { $api } = useNuxtApp();
const token = route.query.token as string;

const error = ref(false);
const success = ref(false);
onMounted(() => {
  if (token) {
    verifyEmail(token)
      .then(() => {
        success.value = true;
      })
      .catch(() => {
        error.value = true;
      });
  }
});

function verifyEmail(token: string) {
  return $api("/verify-email/store", {
    method: "PATCH",
    body: {
      token,
    },
  });
}
</script>

<template>
  <div>
    <h1>Verify Email</h1>
    <div v-if="token">
      <div v-if="error">
        Error verifying email
        <nuxt-link :to="{ name: 'index' }">Go back to home page</nuxt-link>
      </div>
      <div v-else-if="success">
        Email verified successfully
        <nuxt-link :to="{ name: 'index' }">Go back to home page</nuxt-link>
      </div>
      <div v-else>Loading...</div>
    </div>
    <div v-else>
      Invalid token
      <nuxt-link :to="{ name: 'index' }">Go back to home page</nuxt-link>
    </div>
  </div>
</template>
