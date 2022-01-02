module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import "@/assets/styles/variables.scss";
                `,
      },
    },
  },
  devServer: {
    proxy: {
      "^/graphql/": {
        target: "http://localhost:3000",
        secure: false,
        pathRewrite: { "^/graphql/": "/graphql/" },
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
};
