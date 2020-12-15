const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    //打包 dist
    // 选项...
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap:false,
    configureWebpack: config=>{
        if(process.env.NODE_ENV === 'production'){
            return {
                plugins:[
                    new CompressionPlugin({
                        test:/\.js$|\.html$|\.css$|\.ttf$|\.png$|\.jpg/,
                        threshold:100,//超过10K的都打包
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    }
}