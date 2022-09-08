import { useScrollDirection } from "../../../hooks/useScrollDirection";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Icon from "../../../assets/icon-small.png";
import Image from "next/image";

const Header = () => {
  const scrollDir = useScrollDirection();
  const scrollPosition = useScrollPosition();

  const highlight =
    "hover:underline hover:decoration-primary hover:decoration-[2.5px] hover:underline-offset-2 cursor-pointer";

  const headerClasses = `full-width-section flex-row backdrop-blur z-10 sticky top-0 hidden md:flex justify-between`;

  return (
    <motion.div
      className={headerClasses}
      animate={{
        y: scrollDir === "up" ? 0 : "-100%",
        boxShadow:
          scrollPosition <= 0
            ? "0 4px 6px -1px rgb(0 0 0 / 0), 0 2px 4px -2px rgb(0 0 0 / 0)"
            : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-center items-center px-16 py-4">
        <Image src={Icon}></Image>
      </div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="py-6 2xl:py-8 px-16 flex flex-row gap-8 btn"
      >
        <Link href="#home">
          <motion.a whileHover={{ y: -1 }} className={highlight}>
            Home
          </motion.a>
        </Link>
        <Link href="#about">
          <motion.a whileHover={{ y: -1 }} className={highlight}>
            About
          </motion.a>
        </Link>
        <Link href="#projects">
          <motion.a whileHover={{ y: -1 }} className={highlight}>
            Projects
          </motion.a>
        </Link>
        <Link href="#contact">
          <motion.a whileHover={{ y: -1 }} className={highlight}>
            Contact
          </motion.a>
        </Link>
      </motion.nav>
    </motion.div>
  );
};

export default Header;
