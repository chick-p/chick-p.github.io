import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism";

import 'prismjs/components/prism-toml.js';
import 'prismjs/components/prism-bash.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
