/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: require('./next.webpack.config'),
}

module.exports = nextConfig
