import { createStore } from "vuex";
import apolloClient from "../main.js";
import gql from "graphql-tag";
// Create a new store instance.
export default createStore({
  state() {
    return {
      user: "",
      loggedIn: false,
    };
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        state.user = user;
        state.loggedIn = true;
      }
    },
  },
  actions: {
    async getUser(context) {
      let res = await apolloClient.query({
        query: gql`
          query user1 {
            user(_id: "61be77d2ab83f3812f78f4f7") {
              _id
              birthday
              emailAddress
              firstName
              lastName
              office {
                name
              }
            }
          }
        `,
      });
      context.commit("setUser", res.data.user);
    },
  },
});
