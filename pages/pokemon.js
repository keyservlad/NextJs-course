import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function About({data}) {
  const [state, setState] = useState({
    name: data.name,
  });
  // client-side rendering
  //   useEffect(() => {
  //     console.log("Component loaded");
  //     axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
  //       setState({
  //         name: response.data.name,
  //       });
  //     });
  //   }, []);

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon - Nextjs course</title>
        <meta name="description" content="Next JS course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Pokemon</h1>
      <h2>{state.name}</h2>
      <p>This is the Pokemon page</p>
    </div>
  );
}

// static site generation

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//   const data = await res.json();

// //   axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
// //     setState({
// //       name: response.data.name,
// //     });
// //   });

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data,
//     },
//   };
// }



// server side

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
