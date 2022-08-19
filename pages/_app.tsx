import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useGetContent } from '../hooks/useGetContent';
import { MainContext } from '../context/mainContext';
import { getCookie } from '../api/cookie';
import { Language, LANG_KEY } from '../types/global';

type MyAppProps = AppProps & { lang: Language}

function MyApp({ Component, pageProps, lang }: MyAppProps) {
  const { language, changeLanguage, content } = useGetContent(lang);

  return (
    <MainContext.Provider value={{ lang: language, changeLanguage, content }}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const cookie = appContext.ctx.req.headers.cookie;

  return { lang: getCookie(cookie, LANG_KEY) };
}

export default MyApp
