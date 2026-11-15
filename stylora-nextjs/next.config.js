/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stylora.dropletthemes.com',
      },
    ],
  },
};

module.exports = nextConfig;

