module.exports = {
  images: {
    domains: ['images.unsplash.com', 'loremflickr.com', 'github.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
