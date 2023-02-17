const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

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
    removeConsole: {
      exclude: ['error'],
    },
  },
  webpack: (config, { isServer }) => {
    
    if (isServer) return config;

    const isProduction = config.mode === 'production';
    if(!isProduction) return config;

    config.plugins.push(new DuplicatePackageCheckerPlugin());

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;

  }
}

module.exports = withBundleAnalyzer(nextConfig)
