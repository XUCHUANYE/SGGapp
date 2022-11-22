// const { defineConfig } = require("@vue/cli-service");
// module.exports = ({
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://gmall-h5-api.atguigu.cn",
//       },
//     },
//   },
// });
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: "http://gmall-h5-api.atguigu.cn/",
        // changeOrigin:true,
        // pathRewrite: { "^/api": "" },
      },
    },
  },
};
