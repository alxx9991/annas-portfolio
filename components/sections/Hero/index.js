import Row from "../../layout/Row";

const Hero = () => {
  const highlight =
    "text-dark-grey relative inline-block after:block after:h-10 after:w-[103%] after:bg-primary after:bg-opacity-25 after:absolute after:inset-x-[-1.5%] after:inset-y-[75%] after:rounded-full after:-z-10";

  return (
    <div className="full-width-section mt-48 text-center">
      <Row ss={1} es={7} sm={1} em={11} el={1} sl={15}>
        <h1 className="text-text-light-grey">
          Hello, I{"'"}m <span className={highlight}>Anna He</span>
          <br />a <span className={highlight}>product designer</span>
        </h1>
      </Row>
      <Row ss={1} es={7} sm={1} em={11} el={1} sl={15}>
        <p className="text-text-dark-grey text-subtitle mt-8">
          A listener first, designer after
        </p>
      </Row>
    </div>
  );
};

export default Hero;
