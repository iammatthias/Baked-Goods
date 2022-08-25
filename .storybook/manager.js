// .storybook/manager.js

import { addons } from "@storybook/addons";
import bakedGoods from "./bakedGoods";

addons.setConfig({
  theme: bakedGoods,
});
