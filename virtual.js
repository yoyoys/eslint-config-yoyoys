module.exports = {
  rules: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
        caseSensitiveStrict: false,
        ignore: ['^virtual:'],
      },
    ],
  },
};
