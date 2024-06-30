const path = require("path");

module.exports = {
  entry: {
    baydin: "./src/baydin.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/client"),
    filename: "[name].min.js",
    library: "baydin",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
