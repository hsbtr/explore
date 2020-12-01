module.exports = {
  publicPath: "/explore/",
  chainWebpack: config => {
    config.resolve.alias.set(
      "/images/",
      "https://download.yxybb.com/transport/JDStudy/images/"
    );
  },
  devServer: {
    host: "localhost",
    port: 8081,
    hot: true, // webpack模块 热更新
    open: true, // 自动打开浏览器
    compress: true, // 启用gzip压缩
    https: false, // https协议
    proxy: {
      "/api": {
        target: "http://localhost:7001",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
