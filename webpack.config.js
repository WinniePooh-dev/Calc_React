const path = require("path");
const merge = require("webpack-merge");

module.exports = e => {

  let o = merge(
    {},
    {
      entry: "./proj.js",
      output: {
        path: path.join(__dirname, "main"),
        filename: `[name].js`
      },
      resolve: {
        modules: [
          path.resolve(__dirname, "./node_modules"),
        ],
        extensions: [".js", ".jsx"]
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
        ]
      },
      plugins: [
      ]
    }
  );

  return o;
};
