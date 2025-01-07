import type { MDXComponents } from "mdx/types";

import Bio from "@/components/Bio";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Bio,
  };
}
