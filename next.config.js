/** @type {import('next').NextConfig} */
const nextConfig = {

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
