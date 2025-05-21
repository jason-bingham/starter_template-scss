import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    purgeCSSPlugin({
      content: ["./**/*.html"],
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        "logical-properties-and-values": true,
        "opacity-percentage": true,
        "text-decoration-shorthand": true,
      },
    }),
  ],
};
