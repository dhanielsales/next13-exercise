/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  basePath: '/other-app',
}

module.exports = nextConfig
