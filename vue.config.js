module.exports = {
  publicPath: "/explore/",
  chainWebpack: config => {},
  pwa: {
    iconPaths: {
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/favicon-180x180.png",
      maskIcon: "img/icons/favicon.svg",
      msTileImage: "img/icons/favicon-144x144.png"
    },
    manifestOptions: {
      icons: [
        {
          src: "img/icons/miaow-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "img/icons/miaow-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
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
