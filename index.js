/* eslint-env node */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'yoyoys/vue3',
    'yoyoys/vue-typescript',
    '@vue/prettier/skip-formatting',
    'yoyoys/virtual',
    'yoyoys/vue-i18n',
  ],
};
