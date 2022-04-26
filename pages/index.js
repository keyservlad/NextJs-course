import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
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
