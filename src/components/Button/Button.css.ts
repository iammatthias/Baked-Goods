import { recipe } from "@vanilla-extract/recipes";
import { atoms } from "../../styles/styles.css";

export const buttonRecipe = recipe({
  base: [
    atoms({
      borderRadius: 4,
      border: "none",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      textDecoration: "none",
      fontFamily: "body",
      display: "block",
      width: "fit-content",
    }),
    {
      transition: "all 250ms 0ms cubic-bezier(0, 0, 1, 1)",
    },
  ],
  variants: {
    style: {
      primary: atoms({
        background: "black",
        color: "white",
        outlineColor: {
          default: "black",
          hover: "black",
        },
        outline: {
          default: "2px solid",
          hover: "4px solid",
        },
      }),
      secondary: atoms({
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
    shadow: {
      true: {
        boxShadow: "0px 1px 3.4px rgba(0, 0, 0, 0.116), 0px 2.6px 8.7px rgba(0, 0, 0, 0.159), 0px 5.3px 17.7px rgba(0, 0, 0, 0.186), 0px 11px 36.5px rgba(0, 0, 0, 0.216), 0px 30px 100px rgba(0, 0, 0, 0.3)",
      },
    },
  },
});

export type ButtonVariants = Parameters<typeof buttonRecipe>[0];
