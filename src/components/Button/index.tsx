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
  background?: string;
  onclick?: () => void;
} & ButtonVariants;

export const Button = ({ kind, size, style, href, shadow, children, onclick, background }: Props) => {
  return kind === "button-link" ? (
    <Box as='a' className={`${buttonRecipe({ size, style, shadow })}`} href={href} onClick={onclick}>
      {children}
    </Box>
  ) : style === "secondary" ? (
    <Box as='button' className={`${buttonRecipe({ size, style, shadow })}`} onClick={onclick} __background={background} __outlineColor={background}>
      {children}
    </Box>
  ) : (
    <Box as='button' className={`${buttonRecipe({ size, style, shadow })}`} onClick={onclick}>
      {children}
    </Box>
  );
};

export default Button;
