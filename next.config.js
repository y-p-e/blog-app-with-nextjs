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
const removeImports = require('next-remove-imports')();
module.exports = nextConfig
module.exports = removeImports({});
