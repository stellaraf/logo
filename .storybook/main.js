module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // See https://github.com/storybookjs/storybook/issues/12093#issuecomment-858388344
  babel: async options => ({
    ...options,
    plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
  }),
};
