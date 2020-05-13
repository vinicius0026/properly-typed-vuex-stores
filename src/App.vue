<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="#" @click="login">Login</a>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import * as authStore from "@/store/modules/auth"
export default Vue.extend({
  computed: {
    userName() {
      return authStore.getters.authUser?.name
    },
  },
  methods: {
    login() {
      const user = {
        name: "Fake User",
      }

      authStore.mutations.setUser(user)
    },
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
