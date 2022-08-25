// Button.tsx
import React from "react";
import Box from "../Box";
import { buttonRecipe, ButtonVariants } from "./Button.css";
import { themeClass } from "../../styles/styles.css";

type Props = {
  size?: string;
  kind?: string;
  children: React.ReactNode;
} & ButtonVariants;

export const Button = ({ children, size = "medium", kind = "primary" }: Props) => {
  return (
    <Box as='button' className={`${themeClass} ${buttonRecipe({ size, kind })}`}>
      {children}
    </Box>
  );
};

export default Button;
