import Email from "../../../assets/email.svg";
import Dribbble from "../../../assets/dribbble.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      className="full-width-section flex flex-col text-white items-center mt-48 pt-8 mx-[-2.2rem] md:m-0 md:mb-4 rounded-t-[3rem]"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-12 my-8 items-end w-full justify-between"
      >
        <div className="invisible pl-24">© Anna He, 2022</div>
        <div className="flex gap-8 items-center">
          <Dribbble></Dribbble>
          <LinkedIn></LinkedIn>

          <Email></Email>
          <Twitter></Twitter>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="btn text-text-dark-grey justify-self-end pr-24"
        >
          © Anna He, 2022
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Footer;
