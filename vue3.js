/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', '@vue/airbnb'],
  rules: {
    'import/prefer-default-export': 'off',
    'vue/html-button-has-type': 'off',
  },
};
