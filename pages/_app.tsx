import type { AppProps /*, AppContext */ } from 'next/app';
import NavBar from '../components/navigation/navbar';
import { PageTransition } from 'next-page-transitions'
import Footer from '../components/footer';
import '../styles.css';
import '../fontawesomeIcon'

export default function MyApp({ Component, pageProps }: AppProps) {
  let TIME_OUT = 150
  return (
    <>
      <NavBar />
      <PageTransition skipInitialTransition timeout={TIME_OUT} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
      <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity ${TIME_OUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIME_OUT}ms;
          }
        `}</style>
        <Footer />
    </>
  )

}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
