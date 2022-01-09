import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planemo Staking/Validators</title>
        <meta name="description" content="Planemo staking/validators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Planemo Validators
        </h1>

        <h2 className={styles.description}>
          Site is temporarily on maintenance
        </h2>

        <h2>Contacts</h2>
        <div>
          <a href="https://twitter.com/bitcoinduke">Twitter</a>
          <br/>
          <a href="https://t.me/mikhail_shu">Telegram</a> 
          <br/>
          <a href="MikeSh#8650">Discord</a>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by Planemo Std
      </footer>
    </div>
  )
}
