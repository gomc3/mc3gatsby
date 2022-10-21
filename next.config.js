/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com', 'picsum.photos'],
  },
  i18n: {
    locales: ['en-us'],
    defaultLocale: 'en-us',
  },
  experimental: {
    newNextLinkBehavior: true,
  },
}

module.exports = nextConfig
