const withStylus = require('@zeit/next-stylus')
const withPlugins = require('next-compose-plugins')

const nextConfig = {}

module.exports = withPlugins([
                               [ withStylus({
                                              cssModules: true,
                                              cssLoaderOptions: {
                                                localIdentName: '[name].[local]_[hash:base64:5]',
                                              },
                                            }
                               ) ]
                             ], nextConfig)
