const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const { resolve } = require("path")

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "res.cloudinary.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false
  },
  compiler: {
    removeConsole: process.env.NODE_ENV == 'production'
  },
  productionBrowserSourceMaps: process.env.NODE_ENV == 'production',
  webpack: (config, { isServer }) => {
    
    if (isServer) return config;

    const isProduction = config.mode === 'production';
    if(!isProduction) return config;

    config.plugins.push(new DuplicatePackageCheckerPlugin());

    config.resolve.alias['fast-deep-equal'] = resolve(
      __dirname,
      'node_modules',
      'fast-deep-equal'
    )

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;

  }
}

module.exports = withBundleAnalyzer(nextConfig)
