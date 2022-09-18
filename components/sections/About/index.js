import Row from "../../layout/Row";

import Image from "next/image";
import uiStaticTags from "../../../assets/uiTagsStatic.png";
import mobileUiStaticTags from "../../../assets/mobileUiTags.png";

import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const highlight =
    "text-dark-grey relative inline-block after:block after:h-[30%] after:w-[106%] after:bg-primary after:bg-opacity-25 after:absolute after:inset-x-[-3%] after:inset-y-[75%] after:rounded-full after:-z-10";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="full-width-section mt-24"
      id="about"
    >
      <Row>
        <h2 className="text-center mb-16">
          <span className={highlight}>Get to know me</span>
        </h2>
      </Row>
      <Row
        sm={2}
        em={10}
        sl={2}
        el={14}
        className="content-box md:px-20 py-8 rounded-[2rem] bg-grey text-dark-grey max-w-[928px] m-auto"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="subtitle2"
              >
                A listener first, designer after
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="b1"
              >
                In my typical process, I combine data, research and empathy to
                drive design outcomes. Currently, my strengths lie in
                strategising concepts, to designing intuitive and accessible
                interfaces.
              </motion.p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="subtitle2"
                >
                  Outside of design
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="b1"
                id="hi"
              >
                You will usually find me at the gym, reading on psychology or
                making an iced matcha espresso (even in winter)!
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:block min-w-[256px] min-h-[351px]"
          >
            <Image src={uiStaticTags} width={256} height={351}></Image>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:hidden"
          >
            <Image src={mobileUiStaticTags} height={212} width={250}></Image>
          </motion.div>
        </div>
      </Row>
    </motion.div>
  );
};

export default About;
