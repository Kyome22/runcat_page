const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: path.resolve(__dirname, "static", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static", "images"),
          to: path.resolve(__dirname, "dist", "images"),
          globOptions: {
            ignore: ["**/.DS_Store"],
          },
        },
        {
          from: path.resolve(__dirname, "static", "packages"),
          to: path.resolve(__dirname, "dist", "packages"),
          globOptions: {
            ignore: ["**/.DS_Store"],
          },
        },
        {
          from: path.resolve(__dirname, "static", "favicon.ico"),
          to: path.resolve(__dirname, "dist", "favicon.ico"),
        },
        {
          from: path.resolve(__dirname, "static", "analytics.js"),
          to: path.resolve(__dirname, "dist", "js"),
        },
      ],
    }),
  ],
};
