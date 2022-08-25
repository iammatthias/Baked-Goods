import React from "react";
import { Button } from ".";

type Props = {
  size?: "small" | "medium" | "large";
  kind?: "primary" | "secondary";
  children?: React.ReactNode;
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: { control: "text", defaultValue: "Button" },
    size: { control: { type: "select", options: ["small", "medium", "large"] } },
    kind: { control: { type: "select", options: ["primary", "secondary"] } },
  },
};

export const Primary = ({ ...args }: Props) => (
  <Button size={args.size} kind={args.kind}>
    {args.children}
  </Button>
);
