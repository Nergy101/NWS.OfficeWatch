import { createApp } from "vue";
import App from "./App.vue";

import "./assets/styles/main.scss";
import "bootstrap";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import router from './router'

const app = createApp(App).use(router);

const link = "http://localhost:3000/graphql";
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent)

// Create the apollo client
const apolloClient = new ApolloClient({
  uri: link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

// Create a provider
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

export default apolloClient;

app.use(apolloProvider);

app.mount("#app");
