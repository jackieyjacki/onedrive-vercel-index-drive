const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['en', 'ko']
  },
  localePath: path.resolve('public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}
