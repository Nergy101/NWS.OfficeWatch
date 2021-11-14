<template>
  <div class="div">
    <img alt="Vue  logo" src="./assets/logo.png" />
    <div class="apollo-test">
      {{ officeSpace?.name }}
    </div>
    <div v-if="user" class="apollo-event-test">{{ user }}</div>
    <button @click="getUserId()">Get user id</button>
  </div>
</template>

<script>
import { gql } from "@apollo/client/core";

export default {
  name: "App",
  data() {
    return {
      test: "1",
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
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
