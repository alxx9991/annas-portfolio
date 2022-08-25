import Layout from "../components/layout";
import { Hero, About, Projects } from "../components/sections";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </Layout>
    </>
  );
};

export default HomePage;
