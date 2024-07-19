// pages/_app.js
import '../styles/globals.css'; // 这里导入全局 CSS
import Layout from '@/components/layout/layout';


function MyApp({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
    // return <Component {...pageProps} />
}

export default MyApp;
