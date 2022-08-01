import 'normalize.css';
import './_app.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';
import { AnimatePresence } from 'framer-motion';
import { HeadingLevel } from 'ariakit';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Boundaries } from '@bjeco/blocks';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('FZBVRVPL', {
      url: 'https://who.bje.co/script.js',
      includedDomains: ['bje.co'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener (cleanup)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This empty dependency array is needed to only run on mount
  }, []);

  return (
    <Boundaries>
      <Head>
        <title>bje</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
      </Head>
      <HeadingLevel>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </HeadingLevel>
    </Boundaries>
  );
};

export default App;
