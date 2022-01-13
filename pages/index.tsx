import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/layout";
import styles from "@styles/Home.module.css";
import Container from "@mui/material/Container";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ height: "100%" }}>
        <h1 className={styles.title}>dongha~</h1>
      </Container>
    </div>
  );
};

export default Home;
