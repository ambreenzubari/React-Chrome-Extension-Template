const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  devtool:'cheap-module-source-map',

  entry: {
    popup:path.resolve('./src/popup/popup.tsx'),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("assets/manifest.json"),
          to: path.resolve("dist"),
         },
         {
            from: path.resolve("assets/icons"),
            to: path.resolve("dist/icons"),
         }
      ],
    }),
    new HtmlWebpackPlugin({
        title:"React Js",
        filename:'popup.html',
        chunks:['popup']
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: '[name].js',
  },
};
