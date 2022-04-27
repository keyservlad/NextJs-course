import Head from "next/head";
import { useRouter } from "next/router";

export default function Top10Frameworks() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="container">
      <Head>
        <title>{slug}</title>
        <meta name="description" content="Next JS course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{slug}</h1>
      <p>Article description</p>
    </div>
  );
}
