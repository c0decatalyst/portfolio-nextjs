/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   runtime: 'edge',
  // },
  images: {
    // unoptimized: true, // Needed when running static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
        pathname: '/logos/*.svg'
      }
    ]
  }
}

module.exports = nextConfig
