const TerserPlugin = require("terser-webpack-plugin"); // 去掉注释
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启压缩

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  outputDir: "dist/explore",
  publicPath: "/explore/",
  productionSourceMap: false,
  chainWebpack: config => {
    // 开启打包日志
    // config
    //   .plugin("webpack-bundle-analyzer")
    //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    // 压缩图片
    config.module
      .rule("images")
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({ bypassOnDebug: true })
      .end();
  },
  configureWebpack: config => {
    const plugins = [];
    if (isProduction) {
      // 处理生产环境的conlose
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      ];
      // 取消webpack警告的性能提示
      // config.performance = {
      //   hints: "warning",
      //   //入口起点的最大体积
      //   maxEntrypointSize: 1000 * 500,
      //   //生成文件的最大体积
      //   maxAssetSize: 1000 * 1000,
      //   //只给出 js 文件的性能提示
      //   assetFilter: function(assetFilename) {
      //     return assetFilename.endsWith(".js");
      //   }
      // };
    }
    plugins.push(
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: /\.(js|css)$/, // 匹配文件名
        threshold: 10000, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 不删除源文件
        minRatio: 0.8 // 压缩比
      })
    );
    return { plugins };
  },
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
