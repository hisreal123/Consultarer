/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      text: /\.svg$,
      use: ['@svgr/webpack']
    });

    return
  }
}
