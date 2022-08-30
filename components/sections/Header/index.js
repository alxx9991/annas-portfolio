import { useScrollDirection } from "../../../hooks/useScrollDirection";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const scrollDir = useScrollDirection();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    console.log(window.scrollY);
  }, []);

  const highlight =
    "hover:underline hover:decoration-primary hover:decoration-[2.5px] hover:underline-offset-2";

  const headerClasses = `full-width-section flex-row-reverse backdrop-blur z-10 sticky top-0 hidden md:flex`;

  return (
    <motion.div
      className={headerClasses}
      animate={{
        y: scrollDir === "up" ? 0 : "-100%",
        boxShadow:
          scrollPosition <= 100
            ? "0 4px 6px -1px rgb(0 0 0 / 0), 0 2px 4px -2px rgb(0 0 0 / 0)"
            : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
      transition={{ duration: 0.2 }}
    >
      <nav className="py-8 px-16 flex flex-row gap-8 btn">
        <Link href="#home">
          <a className={highlight}>Home</a>
        </Link>
        <Link href="#about">
          <a className={highlight}>About</a>
        </Link>
        <Link href="#projects">
          <a className={highlight}>Projects</a>
        </Link>
        <Link href="#contact">
          <a className={highlight}>Contact</a>
        </Link>
      </nav>
    </motion.div>
  );
};

export default Header;
