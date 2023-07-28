module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@nx/react/plugins/storybook',
    // 'storybook-dark-mode',
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
