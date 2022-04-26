import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function About() {
  const [state, setState] = useState({
    name: "No-Name",
  });
  useEffect(() => {
    console.log("Component loaded");
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
      setState({
        name: response.data.name,
      }); 
    });
  }, []);

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
