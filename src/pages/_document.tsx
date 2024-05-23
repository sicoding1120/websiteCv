/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>my-cv</title>
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
