// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Idea Generation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/audioplayer.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>
      <header>
        <div className="header-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-4 col-md-4">
                <div className="logo-area">
                  <button type="button" className="back__btn navIcon d-block d-lg-none">
                    <i className="fal fa-stream"></i>
                  </button>
                  <Link href="/"><a><i className="far fa-long-arrow-left"></i></a></Link>
                  <Link href="/"><a><img src="/assets/img/logo-icon.svg" alt="logo" /> <span>SearchX</span></a></Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-4">
                <div className="header__mid">
                  <h6>Idea Generation</h6>
                </div>
              </div>
              <div className="col-lg-3 col-4 col-md-4">
                <div className="header__right">
                  <Link href="#"><a><img src="/assets/img/coins-icon.svg" alt="coins" /> <span>25 Tokens Left</span></a></Link>
                  <Link href="#"><a><img src="/assets/img/crown-icon.svg" alt="crown" /> <span>Upgrade</span></a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
