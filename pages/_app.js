import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PT3XXS6' });
}, []);
  return <Component {...pageProps} />;
}

export default MyApp;
