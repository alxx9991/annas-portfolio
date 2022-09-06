import Email from "../../../assets/email.svg";
import Dribbble from "../../../assets/dribbble.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className="full-width-section flex flex-col bg-[black] text-white items-center mt-48 pt-12 mx-[-2.2rem] md:m-0 rounded-t-[3rem]"
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Collab or chat?
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="font-normal"
      >
        Let{"'"}s connect
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-12 my-8 items-end"
      >
        <Dribbble></Dribbble>
        <LinkedIn></LinkedIn>

        <Email></Email>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="btn mb-8 text-text-dark-grey md:self-end md:mr-16"
      >
        © Anna He, 2022
      </motion.p>
    </div>
  );
};

export default Footer;
