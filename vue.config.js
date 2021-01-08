module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: { chunks: 'all' },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/constants/index.scss";',
      },
    },
  },
}
