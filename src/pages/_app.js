import Layout from "../../components/layout/Layout";
import "../styles/globals.css"
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the /products page when accessing the root URL
    router.push('/cars');
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
