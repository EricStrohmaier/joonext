/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ['image.nostr.build', 'yondar-user-content.s3.us-east-2.amazonaws.com'],
    },
  }
  
  module.exports = nextConfig