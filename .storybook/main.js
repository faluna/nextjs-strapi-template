const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          atoms: toPath('src/atoms'),
          molecules: toPath('src/molecules'),
          organisms: toPath('src/organisms'),
          templates: toPath('src/templates'),
          pages: toPath('src/pages'),
          utils: toPath('src/utils'),
          tests: toPath('src/__tests__'),
          api: toPath('src/api'),
          types: toPath('src/types'),
          '~': toPath('src'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
