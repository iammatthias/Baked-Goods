import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Box",
  component: Box,
  argTypes: {
    children: { control: "text" },
  },
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Box",
};
