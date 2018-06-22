const path = require('path');

module.exports = {
    mode:"development",
    entry:{
      index:"./src/index.js"
      },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].bundle.js' //webpack --inline --hot can not use chunkhash
     },
    devtool:'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
            use: [
              {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']               
                 }
              },
              {
                loader: "eslint-loader",
                options: {
                       //fix:true       
                 }
              }
           ]
          },
        ]
      },
      resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
      }
}