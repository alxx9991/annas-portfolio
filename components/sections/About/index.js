import Row from "../../layout/Row";

import Image from "next/image";
import uiStaticTags from "../../../assets/uiTagsStatic.png";
import mobileUiStaticTags from "../../../assets/mobileUiTags.png";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="full-width-section mt-48"
      id="about"
    >
      <Row className="content-box md:px-[25%] py-24 rounded-[3rem] bg-[#000000] text-white">
        <div className="flex flex-col">
          <h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            Get to know me
          </h2>

          <div className="flex flex-col items-start gap-8 md:flex-row justify-between">
            <div className="flex flex-col md:w-[50%] md:min-w-[16rem] gap-16">
              <div className="flex flex-col gap-4">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="subtitle2"
                >
                  I{"'"}m Anna
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="b1"
                >
                  a Sydney based designer currently enjoying the challenges of
                  problem solving and strategising ways to empower people
                  through design.
                </motion.p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="subtitle2"
                  >
                    Outside of design 🍵
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="b1"
                  id="hi"
                >
                  you will usually find me at the gym, reading on psychology or
                  making an iced matcha espresso.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Image src={uiStaticTags}></Image>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="md:hidden"
            >
              <Image src={mobileUiStaticTags}></Image>
            </motion.div>
          </div>
        </div>
      </Row>
    </motion.div>
  );
};

export default About;
