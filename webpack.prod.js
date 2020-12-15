const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Applies cssnano, autoprefixer and responsive font
          {
            loader: "postcss-loader", 
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ['rucksack-css', 'autoprefixer', 'cssnano'],
              },
            },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
});