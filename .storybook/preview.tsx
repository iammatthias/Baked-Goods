import React from "react";
import "../src/styles/global.css";

export const decorators = [
  (Story) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "",
      order: ["Getting Started", "Components"],
      locales: "",
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};
