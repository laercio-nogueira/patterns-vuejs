const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {
  mode: 'development',
  optimization: {
    moduleIds: 'named',
  },
  entry: {},
  output: {
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: 'js/[name].[hash].chunk.js',
    path: resolve('./public/assets/project'),
    publicPath: '/assets/project/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'css-loader',
          },
          cacheBusting: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        generator: {
          outputPath: 'images/',
          publicPath: '/assets/project/images/',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        generator: {
          outputPath: 'fonts/',
          publicPath: '/fonts/',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].bundle.css',
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['!fonts/*.**'],
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.min.js',
      '#deprecated': resolve('../src/main'),
      '#': resolve('../src/main'),
    },
    extensions: ['.vue', '.js', '.ts'],
  },
  performance: {
    hints: 'warning',
  },
  stats: {
    errorDetails: true,
  },
};
