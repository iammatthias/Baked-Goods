// Button.tsx
import React from "react";
import Box from "../Box";
import { buttonRecipe, ButtonVariants } from "./Button.css";

type Props = {
  kind?: string;
  size?: string;
  style?: string;
  href?: string;
  shadow?: boolean;
  children: React.ReactNode;
  onclick?: () => void;
} & ButtonVariants;

export const Button = ({ kind, size, style, href, shadow, children, onclick }: Props) => {
  return kind === "button-link" ? (
    <a className={`${buttonRecipe({ size, style, shadow })}`} href={href} onClick={onclick}>
      {children}
    </a>
  ) : (
    <Box as='button' className={`${buttonRecipe({ size, style, shadow })}`} onClick={onclick}>
      {children}
    </Box>
  );
};

export default Button;
