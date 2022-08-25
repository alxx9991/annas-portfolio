import Row from "../../layout/Row";
import Carousel from "./Carousel";
import MobileCarousel from "../../../assets/mobileCarousel.svg";

const Hero = () => {
  const highlight =
    "text-dark-grey relative inline-block after:block after:h-[30%] after:w-[103%] after:bg-primary after:bg-opacity-25 after:absolute after:inset-x-[-1.5%] after:inset-y-[75%] after:rounded-full after:-z-10";

  return (
    <div className="full-width-section mt-36 text-center">
      <Row ss={1} es={7} sm={1} em={11} el={1} sl={15}>
        <h1 className="text-text-light-grey">
          Hello, I{"'"}m <span className={highlight}>Anna He</span>
          <br />a <span className={highlight}>product designer</span>
        </h1>
      </Row>
      <Row ss={1} es={7} sm={1} em={11} el={1} sl={15}>
        <p className="subtitle3 mt-8">A listener first, designer after</p>
      </Row>
      <Row
        ss={1}
        es={7}
        sm={1}
        em={11}
        el={1}
        sl={15}
        className="hidden mt-36 md:flex justify-center items-center"
      >
        <div className="w-full max-w-[1440px]">
          <Carousel></Carousel>
        </div>
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
        <MobileCarousel></MobileCarousel>
      </Row>
    </div>
  );
};

export default Hero;
