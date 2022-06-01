const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require ('path')

module.exports = {

  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    }), 
    new HTMLWebpackPlugin({
      template: "./public/index.html"
    })
  ],

  module : {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset"
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: ""}
          }, 
          "css-loader", 
          "postcss-loader", 
          "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  
  resolve: {
    extensions: [".js", ".jsx"]
  },  
}