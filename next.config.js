/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Changed from 'standalone' to 'export' for Capacitor compatibility
  webpack: (config) => {
    // Add support for path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    }
    return config
  },
}

module.exports = nextConfig
