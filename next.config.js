/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ensure static exporting is enabled
  distDir: 'out',    // Ensure files are outputted to the "out" folder
  trailingSlash: true,  // Ensures that paths have trailing slashes for static files
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint during build
  },
  // Ensure that the build only focuses on static exportable pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: /node_modules|\.next|out/,  // Ignore these folders
      };
    }
    return config;
  },
};

webpack: (config) => {
  const rules = config.module.rules.find(r => !!r.oneOf);
  rules.oneOf.forEach(loaders => {
    if (Array.isArray(loaders.use)) {
      loaders.use.forEach(l => {
        if (typeof l !== 'string' && typeof l.loader === 'string' && /css-loader/.test(l.loader)) {
          if (!l.options.modules) return;
          const { getLocalIdent, ...others } = l.options.modules;
          l.options = {
            ...l.options,
            modules: {
              ...others,
              getLocalIdent: (ctx, localIdentName, localName) => {
                if (localName === 'dark') return localName;
                return getLocalIdent(ctx, localIdentName, localName);
              },
            },
          };
        }
      });
    }
  });
  return config;
},


module.exports = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
};
