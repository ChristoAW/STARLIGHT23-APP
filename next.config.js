/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  webpack: require('./next.webpack.config'),
  redirects: async () => {
    return [
      {
        source: '/recruitment',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
