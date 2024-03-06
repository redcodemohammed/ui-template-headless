<script lang="ts" setup>
const uid = ref("");
const password = ref("");

const { $auth } = useNuxtApp();

const isLoading = ref(false);
async function login() {
  if (uid.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    try {
      isLoading.value = true;
      const res = await $auth.login(uid.value, password.value);
      navigateTo("/");
    } catch (e: any) {
      alert(e.data.message);
    } finally {
      isLoading.value = false;
    }
  }
}
</script>

<template>
  <h1>Login</h1>
  <p>Enter your email or username and password to login</p>
  <div v-if="isLoading">Loading....</div>
  <form @submit.prevent="login">
    <div>
      <label for="uid">Email or Username</label>
      <input id="uid" v-model="uid" type="text" />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" />
    </div>

    <button>Login</button>
  </form>
</template>

<style scoped></style>
