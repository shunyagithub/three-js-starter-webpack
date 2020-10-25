module.exports = {
  watch: true,
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        ]
      }
    ]
  },
  target: ["web", "es5"],
};