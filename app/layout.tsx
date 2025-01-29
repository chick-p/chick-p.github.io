import type { Metadata } from "next";
import "@/styles/global.css";
import { config } from "@/config";

import "zenn-content-css";

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          data-hid="og:site_name"
          property="og:site_name"
          content={config.site.title}
        />
        <meta property="og:title" content={config.site.title} />
        <meta name="og:description" content={config.site.description} />
        <meta data-hid="og:type" property="og:type" content="website" />
        <meta property="og:image" content={config.site.image} />
        <meta property="og:url" content={config.site.url} />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>{config.site.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
