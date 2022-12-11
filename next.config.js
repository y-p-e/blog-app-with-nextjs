/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/proxy/posts',
        destination: 'http://localhost:5000/posts',
      },
    ]
  },
}
// module.exports = nextConfig
const removeImports = require('next-remove-imports')();
module.exports = removeImports({
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
});
