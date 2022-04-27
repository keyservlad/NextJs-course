import Head from 'next/head'

export default function BlogIndex() {
  return (
    <div className='container'>
      <Head>
        <title>Blog index</title>
        <meta name="description" content="Next JS course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blog index</h1>
      <p>
          This is the blog index page
      </p>
    </div>
  )
}
