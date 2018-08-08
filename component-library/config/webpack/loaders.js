module.exports = {
  module: {
    strictExportPresence: true,
    rules: [
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
  }
};
