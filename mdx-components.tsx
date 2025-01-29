import type { MDXComponents } from "mdx/types";

import Bio from "@/components/Bio";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => (
      <div className="znc codeblock">
        <pre>{children}</pre>
      </div>
    ),
    ...components,
    Bio,
  };
}
