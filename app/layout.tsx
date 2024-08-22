import "./styles/global.scss";

import { Config } from "./config";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          data-hid="og:site_name"
          property="og:site_name"
          content={Config.site.title}
        />
        <meta property="og:title" content={Config.site.title} />
        <meta name="og:description" content={Config.site.description} />
        <meta data-hid="og:type" property="og:type" content="website" />
        <meta property="og:image" content={Config.site.image} />
        <meta property="og:url" content={Config.site.url} />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>{Config.site.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
