import { Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <body>
        <Main />
        <NextScript />
        {/* Google Tag Manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5W39XPX" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  );
}
