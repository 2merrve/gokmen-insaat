import type { AppProps } from 'next/app';
import Background from '../components/Background';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
      <Footer />
    </>
  );
} 