import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LoadIcon from "../../assets/icon.png";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed w-screen h-screen bg-white z-20 flex items-center justify-center">
          <motion.h2
            animate={{
              opacity: [0, 1, 0, 1, 0],
            }}
            transition={{ duration: 3 }}
          >
            <Image src={LoadIcon}></Image>
          </motion.h2>
        </div>
      ) : (
        <div className="full-grid" id="home">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Layout;
