module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true,
    host: 'localhost',
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      symlinks: false,
    },
  },
};
