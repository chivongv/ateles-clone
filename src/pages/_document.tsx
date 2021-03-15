import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>
            Ateles Consulting - Future-proof digital commerce that grows your
            business
          </title>
          <link rel="icon" href="/favicon.ico.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
