import { createApp } from "vue";
import App from "./App.vue";

import "./assets/styles/main.scss";
import "bootstrap";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

// Create Vue app
const app = createApp(App).use(router);

// Create the apollo client
const link = "http://localhost:3000/graphql";
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent)
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

// GLOBAL CHART STYLES
const r = document.querySelector(":root");
let rs = getComputedStyle(r);
let chartColors = [
  "--chart-color-1",
  "--chart-color-2",
  "--chart-color-3",
  "--chart-color-4",
  "--chart-color-5",
  "--chart-color-6",
];
let fontFamily = rs.getPropertyValue("--font-family").trim();
let colors = chartColors.map((color) => {
  return `${rs.getPropertyValue(color).trim()}`;
});
window.Apex.colors = colors;
window.Apex.chart = {
  fontFamily: fontFamily,
};
// Add ApexCharts
app.use(VueApexCharts);

// Mount app
app.mount("#app");
