/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: /node_modules|\.next|out/,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
