<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
<template>
  <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir" class="app">
    <NuxtLayout>
      <NuxtLoadingIndicator></NuxtLoadingIndicator>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </Html>
</template>
<style>
.app {
  font-family: "IBM Plex Sans Arabic";
}
</style>
