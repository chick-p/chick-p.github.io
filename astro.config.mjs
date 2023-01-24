import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

export default defineConfig({
  site: `https://www.chick-p.work/`,
  base: `/`,
  markdown: {
  },
  integrations: [mdx(), image()],
});
