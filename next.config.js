/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/proxy/:match*',
        destination: 'http://localhost:5000/:match*',
      },
    ]
  },
}

module.exports = nextConfig
