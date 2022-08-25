import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button,
  argTypes: {
    kind: { control: { type: "select", options: ["button", "button-link"] } },
    href: { control: "text", if: { arg: "kind", eq: "button-link" } },
    size: { control: { type: "select", options: ["small", "medium", "large"] } },
    style: { control: { type: "select", options: ["primary", "secondary"] } },
    children: { control: "text" },

    shadow: { control: "boolean" },
    onclick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  kind: "button",
  href: "https://www.google.com",
  size: "medium",
  style: "primary",
  shadow: true,
  children: "Button",
  onclick,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "button",
  href: "https://www.google.com",
  size: "medium",
  style: "secondary",
  shadow: true,
  children: "Button",
  onclick,
};
