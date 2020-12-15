const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // writeToDisk:true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader", 
            options: {sourceMap: true}
          },
          // Applies cssnano, autoprefixer and responsive font
          {
            loader: "postcss-loader", 
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ['rucksack-css'],
              },
            }
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader", 
            options: {sourceMap: true}
          },
        ],
      },
    ],
  },
});