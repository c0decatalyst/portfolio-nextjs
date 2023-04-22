/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.technewsworld.com',
        pathname: '/wp-content/uploads/sites/3/2021/08/hacker-face-numbers.jpg'
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
        pathname: '/logos/*.svg'
      }
    ]
  }
}

module.exports = nextConfig
