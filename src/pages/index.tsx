import Head from 'next/head';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Cases from '@components/Cases';
import Customers from '@components/Customers';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Ateles Consulting - Future-proof digital commerce that grows your
          business
        </title>
        <link rel="icon" href="/favicon.ico.png" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Cases />
      <Customers />
      <Footer />
    </div>
  );
}
