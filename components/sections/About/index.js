import Row from "../../layout/Row";

import Image from "next/image";
import uiStaticTags from "../../../assets/uiTagsStatic.png";
import Teacup from "../../../assets/teacup.svg";

const About = () => {
  return (
    <div className="full-width-section mt-48">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} className="content-box">
        <div className="flex flex-col">
          <h2 className="text-center text-subtitle text-text-light-grey mb-12">
            GET TO KNOW ME
          </h2>
          <div className="flex flex-col items-center gap-8 md:flex-row justify-between">
            <div className="flex flex-col md:w-[50%] md:min-w-[16rem] gap-16">
              <div className="flex flex-col gap-4">
                <h3 className="subtitle2">I{"'"}m Anna</h3>
                <p>
                  a Sydney based designer currently enjoying the challenges of
                  problem solving and strategising ways to empower people
                  through design.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="subtitle2">Outside of design</h3>
                  <Teacup></Teacup>
                </div>
                <p>
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
