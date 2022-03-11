import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/App.css'
import '../styles/header.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <meta name="google-site-verification" content="JK8RCvGD84djvXG_2wwb4od0I8jc2gAL68EcVbdgeMo" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <Component {...pageProps} />
    
    </>
}

export default MyApp
