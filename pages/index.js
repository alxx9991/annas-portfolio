import Layout from "../components/layout";
import { Hero, About, Projects } from "../components/sections";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Anna He</title>
        <meta description="Portfolio website for Anna He" />
        <link rel="shortcut icon" href={"/icon-small.png"} />
      </Head>
      <Layout>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </Layout>
    </>
  );
};

export default HomePage;
