/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'api.multiavatar.com/random',
      },
      {
        protocol: 'http',
        hostname: 'localhost:',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
