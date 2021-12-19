<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./layouts/Nav.vue";
export default {
  components: {
    Navbar,
  },
  async created() {
    await this.$store.dispatch("getUser");
    let user = await this.$store.getters.getUser;
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 9rem;
  font-size: 1.6rem;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
