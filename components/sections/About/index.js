import Row from "../../layout/Row";

import Image from "next/image";
import uiStaticTags from "../../../assets/uiTagsStatic.png";

const About = () => {
  return (
    <div className="full-width-section mt-48" id="about">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} className="content-box">
        <div className="flex flex-col">
          <h2 className="text-center text-text-dark-grey mb-16">
            Get to know me
          </h2>
          <div className="flex flex-col items-start gap-8 md:flex-row justify-between">
            <div className="flex flex-col md:w-[50%] md:min-w-[16rem] gap-16">
              <div className="flex flex-col gap-4">
                <h3 className="subtitle2">I{"'"}m Anna</h3>
                <p className="b1">
                  a Sydney based designer currently enjoying the challenges of
                  problem solving and strategising ways to empower people
                  through design.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="subtitle2">Outside of design 🍵</h3>
                </div>
                <p className="b1" id="hi">
                  you will usually find me at the gym, reading on psychology or
                  making an iced matcha espresso.
                </p>
              </div>
            </div>
            <div className="w-80">
              <Image src={uiStaticTags} layout="responsive"></Image>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default About;
