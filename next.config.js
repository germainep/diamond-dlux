const withStylus = require('@zeit/next-stylus')
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withSourceMaps = require('@zeit/next-source-maps')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
                                                              enabled: process.env.ANALYZE === 'true',
                                                            })

const nextConfig = {}

module.exports = withPlugins(
    [ [ withSourceMaps(withOffline(withBundleAnalyzer({ devtool: 'hidden-source-map', }))) ],
      [ withStylus({
                     cssModules: true,
                     cssLoaderOptions: {
                       localIdentName: '[name].[local]_[hash:base64:5]',
                     },
                   }
      ) ]
    ], nextConfig)
