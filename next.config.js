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
    defaultLocale: "en"
  }
}

module.exports = withBundleAnalyzer(nextConfig)
