/* eslint-env node */
const createAliasSetting = require('@vue/eslint-config-airbnb-with-typescript/createAliasSetting');
const { rules: baseImportsRules } = require('@vue/eslint-config-airbnb/rules/imports');

module.exports = {
  extends: ['@vue/typescript'],
  settings: {
    ...createAliasSetting(),
  },
  rules: {
    // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
    'import/no-extraneous-dependencies': [
      baseImportsRules['import/no-extraneous-dependencies'][0],
      {
        ...baseImportsRules['import/no-extraneous-dependencies'][1],
        devDependencies: baseImportsRules[
          'import/no-extraneous-dependencies'
        ][1].devDependencies.reduce((result, devDep) => {
          const toAppend = [devDep];
          const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
          if (devDepWithTs !== devDep) {
            toAppend.push(devDepWithTs);
          }
          return [...result, ...toAppend];
        }, []),
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mts: 'never',
        vue: 'always',
      },
    ],
  },
};
