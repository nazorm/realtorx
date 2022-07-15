import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Intro } from 'src/components/Intro'
import { NewOffers } from 'src/components/NewOffers';
import { Testimonials } from 'src/components/Testimonials';
import { Footer } from 'src/components/Footer';
import styled from 'styled-components';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Realtorx</title>
        <meta name="description" content="A description of realtorx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <Intro />
        <NewOffers />
        <Testimonials />
        <Footer />
      </Wrapper>

      {/* <main className={styles.main}>
 
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home


const Wrapper = styled.section`
width: 85%;
margin: 10px auto;
`