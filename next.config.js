/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  transpilePackages: ['lodash-es']
};

module.exports = nextConfig;
