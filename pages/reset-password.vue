<script lang="ts" setup>
definePageMeta({
  layout: "authentication",
  public: true,
  name: "reset-password",
});

const route = useRoute("reset-password");
const { $api } = useNuxtApp();
const token = route.query.token as string;

const error = ref(false);
const success = ref(false);
const password = ref("");

async function resetPassword() {
  error.value = false;
  success.value = false;
  try {
    await $api("/password-reset", {
      method: "PATCH",
      body: {
        token,
        password: password.value,
      },
    });
    success.value = true;
  } catch {
    error.value = true;
  }
}
</script>

<template>
  <div>
    <h1>Reset Password</h1>
    <div v-if="token">
      <div v-if="error">
        Password was not set, please try again
        <nuxt-link :to="{ name: 'index' }">Go back to home page</nuxt-link>
      </div>
      <div v-else-if="success">
        Password reset successfully
        <nuxt-link :to="{ name: 'index' }">Go back to home page</nuxt-link>
      </div>
      <div v-else>
        <label for="password">Enter your new password</label>
        <input id="password" v-model="password" type="password" />
        <button @click="resetPassword">Reset Password</button>
      </div>
    </div>
    <div v-else>
      Invalid token
      <nuxt-link :to="{ name: 'index' }">Go back to home page</nuxt-link>
    </div>
  </div>
</template>
