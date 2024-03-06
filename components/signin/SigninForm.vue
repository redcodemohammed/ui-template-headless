<script lang="ts" setup>
const uid = ref("");
const password = ref("");

const { $auth } = useNuxtApp();

const isLoading = ref(false);
async function signin() {
  if (uid.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    try {
      isLoading.value = true;
      await $auth.signin(uid.value, password.value);
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

  <form @submit.prevent="signin">
    <div>
      <label for="uid">Email or Username</label>
      <input id="uid" v-model="uid" type="text" />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" />
    </div>

    <button>Signin</button>
  </form>
</template>
