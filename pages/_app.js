import '@/styles/tailwind.css';
import '@/styles/nprogress.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import ProgressBar from '@/components/ProgressBar';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <ProgressBar />
    </>
  );
};

export default App;
