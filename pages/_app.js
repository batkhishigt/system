import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import 'styles/globals.css';
import { userService } from 'services';
import Nprogress from 'nprogress';
import "nprogress/nprogress.css"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default App;
Router.onRouteChangeStart = url => {
  Nprogress.start();
}
Router.onRouteChangeComplete = url => {
  Nprogress.done();
}
Router.onRouteChangeError = url => {
  Nprogress.done();
}

function App({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authCheck)
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    }
  }, []);
  function authCheck(url) {
    const publicPaths = ['/login'];
    const path = url.split('?')[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath }
      });
    } else {
      setAuthorized(true);
    }
    setAuthorized(true);
  }
  return (
    <>
      <Head>
        <title>ТУЛГА систем</title>
        {/* bootstrap css */}
        <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />

      </Head>

      {authorized && (
        <>
          <Component {...pageProps} />
        </>
      )}
      {/* <script>
          let btn = document.querySelector("#btn");
          let sidebar = document.querySelector(".sidebar");

          btn.onclick = function () {
            sidebar.classList.toggle("active");
      };
        </script> */}
    </>
  );
}