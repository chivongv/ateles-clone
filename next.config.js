module.exports = {
  async redirects() {
    return [
      {
        source: '/eng',
        destination: '/',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/personal-data-and-cookie-policy',
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ['en-US', 'no', 'sv'],
    defaultLocale: 'en-US',
  },
};
