/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    optimizeFonts: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/v0/b/true-native-web.appspot.com/o/**',
        },
      ],
    },
}
