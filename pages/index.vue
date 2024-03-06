<script lang="ts" setup>
const $auth = useAuth();
const user = useCurrentUser();
</script>

<template>
  <div class="" dir="auto">
    <client-only>
      <pre>{{ user }}</pre>
    </client-only>
    <button @click="$auth.logout">Logout</button>
  </div>
</template>
