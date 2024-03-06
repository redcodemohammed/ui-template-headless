<script lang="ts" setup>
definePageMeta({
  layout: "authentication",
  public: true,
  name: "signup",
});
</script>

<template>
  <h1>SignUp</h1>
  <signup-form />
  <h2>Already have an account? <nuxt-link :to="{ name: 'signin', query: $route.query }">Signin</nuxt-link></h2>
</template>
