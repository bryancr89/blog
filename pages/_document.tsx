import Document, { Html, Head, Main, NextScript } from 'next/document'
import { MainNavigation } from '../components/MainNavigation'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <MainNavigation />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument