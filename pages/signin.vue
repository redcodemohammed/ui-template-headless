<script lang="ts" setup>
definePageMeta({
  layout: "authentication",
  public: true,
  name: "signin",
});
</script>

<template>
  <h1>SignIn</h1>
  <signin-form />
  <h2>Don't have an account? <nuxt-link :to="{ name: 'signup', query: $route.query }">Signup</nuxt-link></h2>
</template>
