const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
  port: 3002,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
},

  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
 module: {
  rules: [
    {
      test: /\.(tsx|ts|js)?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'], // ✅ Add this
    },
  ],
},

plugins: [
new ModuleFederationPlugin({
  name: 'ordersApp',
  filename: 'remoteEntry.js',
  exposes: {
  "./CartPage": "./src/CartPage",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react,
      eager: false,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
      eager: false,
    },
  },
}),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
