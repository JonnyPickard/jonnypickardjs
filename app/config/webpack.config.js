const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const { NODE_ENV = 'development' } = process.env;

module.exports = {
  mode: NODE_ENV,
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: require.resolve('style-loader')
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 2, // Loaders before this
              modules: true, // Use css modules
              camelCase: 'dashes',
              localIdentName: '[local]-[hash:4]' // TODO: remove [local] for prod
            }
          },
          {
            loader: require.resolve('postcss-loader'), // PostCSS
            options: {
              config: {
                path: 'config/postcss.config.js'
              }
            }
          },
          {
            loader: require.resolve('sass-loader') // SCSS
            // Will need to add options: importPaths: here if using resolvers
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico')
    }),
    // Copy docs + README over to bundle location
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../../docs'),
        to: 'docs',
        toType: 'dir'
      },
      path.resolve(__dirname, '../../README.md')
    ])
  ],

  devServer: {
    publicPath: '/',
    historyApiFallback: true
  }
};
