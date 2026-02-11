/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/IndiTiffins-Interface',
  assetPrefix: '/IndiTiffins-Interface/',
}

module.exports = nextConfig
