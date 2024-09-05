const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",

  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
    options: path.resolve("./src/options/options.tsx")
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use:'assets/resource', 
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins([
      "popup",
      "options"
    ])
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  output: {
    filename: "[name].js",
  },
};


function getHtmlPlugins(chunks){
  return chunks.map(chunk => new HtmlWebpackPlugin({
    title: "React Extensions", 
    filename: `${chunk}.html`,
    chunks: [chunk],
  }));
}