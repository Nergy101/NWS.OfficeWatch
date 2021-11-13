import { createApolloProvider } from "@vue/apollo-option";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});
