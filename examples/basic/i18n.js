module.exports = {
  locales: ['en', 'ca', 'es'],
  defaultLocale: 'en',
  keySeparator: false,
  pages: {
    '*': ['common'],
    '/404': ['error'],
    '/': ['home'],
    '/dashboard': ['home'],
    'rgx:^/more-examples': ['more-examples'],
    '/more-examples/flat': ['flat'],
  },
  loadLocaleFrom: (lang, ns) => {
    return import(`./locales/${lang}/${ns}.json`).then((m) => m.default)
  },
}
