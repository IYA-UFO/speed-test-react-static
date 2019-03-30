import React from "react";

export default {
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>スピード計測</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
