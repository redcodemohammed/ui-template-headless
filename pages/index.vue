<script lang="ts" setup>
const $auth = useAuth();
const user = useCurrentUser();
</script>

<template>
  <div class="" dir="auto">
    <client-only>
      <pre>{{ user }}</pre>
      <div v-if="user?.isEmailVerified">Email is verified</div>
      <button v-if="!user?.isEmailVerified" @click="$auth.sendVerificationEmail">Send verification email</button>
    </client-only>
    <button @click="$auth.logout">Logout</button>
  </div>
</template>
