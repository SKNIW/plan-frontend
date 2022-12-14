const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: "/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"]
  },
  context: path.resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: "file-loader",
        options: {
          name: "[contenthash].[ext]",
          outputPath: "assets"
        }
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: "image-webpack-loader",
        options: {
          optipng: {
            enabled: false
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" }), new Dotenv()]
}
