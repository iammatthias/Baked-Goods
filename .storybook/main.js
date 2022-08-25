const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-storysource"],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config) {
    config.plugins.push(vanillaExtractPlugin());
    return config;
  },
};
