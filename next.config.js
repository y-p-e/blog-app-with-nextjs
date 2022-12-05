/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/proxy',
        destination: 'http://localhost:5000',
      },
    ]
  },
}

module.exports = nextConfig
