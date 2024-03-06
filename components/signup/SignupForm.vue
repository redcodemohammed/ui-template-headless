<script lang="ts" setup>
const email = ref("");
const password = ref("");
const username = ref("");
const { $auth, $api } = useNuxtApp();

const isLoading = ref(false);
async function login() {
  if (email.value === "" || password.value === "" || username.value === "") {
    alert("Please fill in all fields");
  } else {
    try {
      isLoading.value = true;
      await $auth.signup({
        email: email.value,
        password: password.value,
        username: username.value,
      });
    } catch (e: any) {
      alert(e.data.message);
    } finally {
      isLoading.value = false;
    }
  }
}
</script>

<template>
  <div v-if="isLoading">Loading....</div>
  <form @submit.prevent="login">
    <div>
      <label for="uid">Email</label>
      <input id="uid" v-model="email" type="text" />
    </div>

    <div>
      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" />
    </div>

    <button>Signup</button>
  </form>
</template>
