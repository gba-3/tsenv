module.exports = {
  mode: "development",
  entry: "./src/base.ts",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts"]
  }
};

