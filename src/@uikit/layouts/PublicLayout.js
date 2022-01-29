import { Layout } from 'antd';
import PropTypes from 'prop-types';
import ConfigProvider from '@uikit/commons/ConfigProvider';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DefaultFooter from '../footers/DefaultFooter';
import Header from './Header';
import { PublicLayoutStyles } from './styles';

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function PublicLayout({ children, isShowFooter = true }) {
  const controls = useAnimation();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      controls.start((i) => variants.exit);
    };
    const handleRouteChangeComplete = () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
      const snapView = document.getElementsByClassName('scroll-snap-container');
      if (snapView.length) {
        snapView[0].scrollTop = 10;
      }
      
      setTimeout(() => {
        controls.start((i) => variants.enter);
      }, 300);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <ConfigProvider>
      <PublicLayoutStyles>
        <Header />
        <Layout.Content>
          <motion.main
            initial="hidden"
            exit="exit"
            animate={controls}
            variants={variants}
            transition={{ type: 'linear' }}
          >
            {children}
          </motion.main>
        </Layout.Content>
        {isShowFooter && <DefaultFooter />}
      </PublicLayoutStyles>
    </ConfigProvider>
  );
}

PublicLayout.propTypes = {
  children: PropTypes.node,
  isShowFooter: PropTypes.bool,
};
