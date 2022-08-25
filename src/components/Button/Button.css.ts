import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../styles/styles.css";

export const buttonRecipe = recipe({
  base: atoms({
    borderRadius: 4,
    border: "none",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  }),
  variants: {
    kind: {
      primary: atoms({
        background: "black",
        color: "white",
        outlineColor: {
          default: "silver",
          hover: "silver",
        },
        outline: {
          default: "2px solid",
          hover: "4px solid",
        },
      }),
      secondary: atoms({
        background: "gold",
        color: "black",
        outlineColor: {
          default: "yellow",
          hover: "yellow",
        },
        outline: {
          default: "2px solid",
          hover: "4px solid",
        },
      }),
    },
    size: {
      small: atoms({ fontSize: "small" }),
      medium: atoms({ fontSize: "p" }),
      large: atoms({ fontSize: "h1" }),
    },
  },
});

export type ButtonVariants = Parameters<typeof buttonRecipe>[0];
