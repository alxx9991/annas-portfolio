import Row from "../../layout/Row";
import Carousel from "./Carousel";
import MobileCarousel from "../../../assets/carouselMobile.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const highlight =
    "text-dark-grey relative inline-block after:block after:h-[30%] after:w-[106%] after:bg-primary after:bg-opacity-25 after:absolute after:inset-x-[-3%] after:inset-y-[75%] after:rounded-full after:-z-10";

  const highlight2 =
    "text-dark-grey relative inline-block after:block after:h-[30%] after:w-[112%] after:bg-primary after:bg-opacity-25 after:absolute after:inset-x-[-6%] after:inset-y-[75%] after:rounded-full after:-z-10";

  return (
    <div className="full-width-section mt-16 2xl:mt-20 text-center">
      <Row ss={1} es={7} sm={1} em={11} el={1} sl={15}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="text-text-light-grey"
        >
          Hello, I{"'"}m&nbsp;&nbsp;<span className={highlight2}>Anna He</span>
          <br />
          a&nbsp;&nbsp;<span className={highlight}>product designer</span>
        </motion.h1>
      </Row>
      <Row
        ss={1}
        es={7}
        sm={1}
        em={11}
        el={1}
        sl={15}
        className="hidden mt-24 md:flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.3 }}
          className="w-full max-w-[900px]"
        >
          <Carousel></Carousel>
        </motion.div>
      </Row>
      <Row
        ss={1}
        es={7}
        sm={1}
        em={11}
        el={1}
        sl={15}
        className="md:hidden flex justify-center items-center mt-36"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.3 }}
        >
          <Image src={MobileCarousel}></Image>
        </motion.div>
      </Row>
    </div>
  );
};

export default Hero;
