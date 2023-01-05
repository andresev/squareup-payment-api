/** @type {import('next').NextConfig} */

// const withTM = require('next-transpile-modules')([
//   '@square/web-sdk',
//   'react-square-web-payments-sdk',
// ]);

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
