import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: `https://www.chick-p.work/`,
  base: `/`,
  markdown: {},
  integrations: [mdx()],
});
