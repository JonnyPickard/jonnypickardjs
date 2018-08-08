const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src/components'), 'node_modules']
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
        test: /\.scss$/,
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
              localIdentName: '[name]-[hash:4]' // TODO: remove [name] for prod
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
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
};
