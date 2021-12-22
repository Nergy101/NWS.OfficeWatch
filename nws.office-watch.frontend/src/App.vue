<template>
  <div class="app">
    <Navbar v-on:themeChanged="toggleTheme" />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./layouts/Nav.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      theme: "",
    };
  },
  beforeMount() {
    this.theme = localStorage.getItem("theme"); // retrieves theme value from local storage
    document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode"; //toggles theme value
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme); // stores theme value on local storage
    },
  },
  async created() {
    await this.$store.dispatch("getUser");
    let user = await this.$store.getters.getUser;
  },
};
</script>
<style lang="scss">
html {
  background-color: $backgroundColor1;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 9rem;
  font-size: 1.6rem;

  background-color: $backgroundColor1;
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
