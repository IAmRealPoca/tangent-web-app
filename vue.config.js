module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      symlinks: false,
    },
  },
};
