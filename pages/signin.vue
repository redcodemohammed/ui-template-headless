<script lang="ts" setup>
definePageMeta({
  layout: "authentication",
  public: true,
  name: "signin",
});

const { $api, $auth } = useNuxtApp();

const email = ref("");
async function sendPasswordResetToken() {
  await $auth.sendPasswordResetEmail(email.value);

  alert("Password reset email sent");

  email.value = "";
}
</script>

<template>
  <h1>SignIn</h1>
  <signin-form />
  <h2>Don't have an account? <nuxt-link :to="{ name: 'signup', query: $route.query }">Signup</nuxt-link></h2>

  <h2>Forgot your password?</h2>
  <label for="email">Your Email</label>
  <input id="email" v-model="email" type="email" />
  <button @click="sendPasswordResetToken">Send Password Reset Email</button>
</template>
