import '../styles/globals.css'
import { NextPageWithLayout } from '../types';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Layout><Component {...pageProps} /></Layout>)
}

export default MyApp
