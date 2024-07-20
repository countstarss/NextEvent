// pages/_app.js
import '../styles/globals.css'; // 这里导入全局 CSS
import Layout from '@/components/layout/layout';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return <Layout>
            <Head>
                <title>Next Events</title>
                <meta name="description" content="NextJS Events"/>
                <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    // return <Component {...pageProps} />
}

export default MyApp;
