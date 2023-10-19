# Yoyo's ESLint Config
This is my own ESLint configuration.

I've used the Airbnb code style and TypeScript for working with Vue projects.

This repository aims to make the following problems easier:

1. `@typescript-eslint` dependency
2. TypeScript alias settings
3. `eslint-config-import` settings

I have modified some rules and tried to make dependencies more flexible.
If you encounter any problems related to peer dependencies, please let me know.

## Usage
```
npm i -D eslint eslint-config-yoyoys @vue/eslint-config-airbnb @vue/eslint-config-airbnb-with-typescript@7 @vue/eslint-config-typescript eslint-plugin-vue
```
And edit your `.eslintrc` from example.

## Roadmap
- [ ] node.js config

## Examples
No brainer
```js
/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'yoyoys'
  ],
};
```
Vue With TypeScript config
```js
// .eslintrc

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
  ],
};
```
With unocss, i18n
```js
// .eslintrc

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
    'yoyoys/vue-virtual',
    'yoyoys/vue-i18n',
  ],
};
```
