const nextTranslate = require('next-translate');

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
  ...nextTranslate(),
};
