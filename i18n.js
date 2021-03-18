module.exports = {
  locales: ['en-US', 'no', 'sv'],
  defaultLocale: 'en-US',
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    '*': ['common'],
    '/': ['common', 'home'],
    '/our-offer': ['common', 'our-offer'],
    '/about-us': ['about-us'],
  },
};
