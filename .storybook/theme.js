import { create } from "@storybook/theming";
import logo from "./public/bakedGoods.png";

export default create({
  base: "light",
  brandTitle: "Baked Goods",
  brandUrl: "https://github.com/iammatthias/Baked-Goods",
  brandImage: logo,
  brandTarget: "_self",
});
