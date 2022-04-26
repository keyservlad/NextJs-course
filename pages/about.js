import Head from "next/head";

export default function About() {
  return (
    <div className='container'>
      <Head>
        <title>About - Nextjs course</title>
        <meta name="description" content="Next JS course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ color: "red" }}>About</h1>
      <p>This is the about page</p>
      <img src="/image/pika.png" alt="pika" />
      <style global jsx>
        {`
          body {
            background: yellow;
            color: black;

            h1 {
              font-family: sans-serif;
              font-size: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
