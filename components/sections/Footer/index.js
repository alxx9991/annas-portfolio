import Email from "../../../assets/email.svg";
import Dribbble from "../../../assets/dribbble.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="full-width-section flex flex-col text-white items-center mt-24 mx-[-2.2rem] md:m-0 md:mt-12 md:mb-4 rounded-t-[3rem]"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4 md:gap-12 my-8 md:items-end w-full items-center md:justify-between"
      >
        <div className="hidden md:block md:invisible pl-24">© 2022 Anna He</div>
        <div className="flex gap-8 items-center">
          <motion.div whileHover={{ y: -2 }}>
            <Link href="https://dribbble.com/byannahe">
              <a>
                <Dribbble></Dribbble>
              </a>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="https://www.linkedin.com/in/anna-he-21bb34205/">
              <a>
                <LinkedIn></LinkedIn>
              </a>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="mailto:annaheee@outlook.com">
              <a>
                <Email></Email>
              </a>
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <Link href="https://twitter.com/aannaahe">
              <a>
                <Twitter></Twitter>
              </a>
            </Link>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="btn text-text-dark-grey justify-self-end md:pr-24"
        >
          © 2022 Anna He
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;
