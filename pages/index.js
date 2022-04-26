import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next JS course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
      <p>
          This is the home page
      </p>
    </div>
  )
}
