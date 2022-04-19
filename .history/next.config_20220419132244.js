/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: <div {loader : "@svgr/webpack" , option}=""></div>,
    });

    return config;
  },
};
