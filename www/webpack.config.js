const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
      new CopyWebpackPlugin([
          'index.html',
          'index.js',
          "../pkg/wasm_game_of_life.js",
          "../pkg/wasm_game_of_life_bg.wasm"
      ])
  ],
};
