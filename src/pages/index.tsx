import Head from 'next/head';
import Navbar from '@components/Navbar';
import Hero from '@sections/home/Hero';
import Services from '@sections/home/Services';
import Cases from '@sections/home/Cases';
import Customers from '@sections/home/Customers';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Ateles Consulting - Future-proof digital commerce that grows your
          business
        </title>
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
