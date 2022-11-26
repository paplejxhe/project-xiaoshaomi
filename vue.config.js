const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,     //关闭语法检查
  outputDir: process.env.outputDir,
  publicPath:"./",
  devServer: {
    //设置这个是为了能够自动打开浏览器
    host: 'localhost',
    port: 8080,
    https: false,
    hot: false,
    proxy: {
      /* '/api': {
        target:"http://150.158.57.252:19999",
        pathRewrite:{
          "^/api":""
          },
      }, */
        'api': { 
          target: 'http://150.158.57.252:19999',
          pathRewrite: {   //重写路径，这种是没有我们定义的前缀
              '^/api' : '' 
          }
      },
      '/s':{
        target:"https://mp.weixin.qq.com/s",
        pathRewrite:{
            pathRewrite: {   //重写路径，这种是没有我们定义的前缀
                '^/s': '' 
            }
          },
      },
      '/mp':{
        target:"https://mp.weixin.qq.com/mp",
        pathRewrite:{
            pathRewrite: {   //重写路径，这种是没有我们定义的前缀
                '^/mp': '' 
            }
          },
      },
      '/mmbiz_jpg':{
        target:"https://mp.weixin.qq.com/mmbiz_jpg",
        pathRewrite:{
            pathRewrite: {   //重写路径，这种是没有我们定义的前缀
                '^/s': '' 
            }
          },
      }
    }
  }
})
