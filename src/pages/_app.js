import { useStore } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import 'styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import PublicLayout from '@uikit/layouts/PublicLayout';

function App({ Component, pageProps }) {
  const { store, persistor } = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Livvic:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico"
          rel="stylesheet"
        />
        {/* <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_KEY_GOOGLE_MAP}&v=3.exp&libraries=places`}
        /> */}
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <PublicLayout isShowFooter={pageProps.isShowFooter} disableMotion={pageProps.disableMotion}>
              <Component {...pageProps} />
            </PublicLayout>
          </AnimatePresence>
        </PersistGate>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default (App);
