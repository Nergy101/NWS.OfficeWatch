<template>
  <div :class="appColors" ref="appColor">
    <Nav></Nav>
    <img alt="Vue  logo" src="./assets/logo.png" />
    <div class="apollo-test">
      {{ officeSpace?.name }}
    </div>
    <div v-if="user" class="apollo-event-test">{{ user }}</div>
    <button @click="getUserId()">Get user id</button>
    <button @click="switchTheme">Switch theme</button>
  </div>
</template>

<script>
import { gql } from "@apollo/client/core";
import Nav from "./layouts/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      test: "1",
      appColors: "",
    };
  },
  apollo: {
    officeSpace: {
      query: gql`
        query officeSpace {
          officeSpace(officeSpaceId: "1") {
            name
          }
        }
      `,
    },

    //? Why on earth does this not work?
    // officeSpace: {
    //   query: gql`
    //     query officeSpace($officeSpaceId: String!) {
    //       officeSpace(officeSpaceId: $officeSpaceId) {
    //         name
    //       }
    //     }
    //   `,
    //   variables: {
    //     officeSpaceId: "1",
    //   },
    // },
  },
  methods: {
    getUserId() {
      // Add a mutation
    },
    switchTheme() {
      this.appColors === ""
        ? (this.appColors = "dark-theme")
        : (this.appColors = "");
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
html {
  padding: 0;
  margin: 0;
  font-size: 62.5%;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
}
</style>
