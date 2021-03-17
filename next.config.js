module.exports = {
  async redirects() {
    return [
      {
        source: '/eng',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
