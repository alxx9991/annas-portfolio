import Row from "../../layout/Row";
import UITagsStatic from "../../../assets/uiTagsStatic.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="full-width-section mt-48">
      <Row ss={1} es={7} sm={2} em={10} sl={3} el={13} className="content-box">
        <div className="flex flex-col">
          <h2 className="text-center text-subtitle text-text-light-grey mb-8">
            GET TO KNOW ME
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col  w-[50%]">
              <div className="flex flex-col">
                <h3 className="text-subtitle-unspaced">I'm Anna</h3>
                <p>
                  a Sydney based designer currently enjoying the challenges of
                  problem solving and strategising ways to empower people
                  through design.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <h3 className="text-subtitle-unspaced">Outside of design</h3>
                </div>
                <p>
                  you will usually find me at the gym, reading on psychology or
                  making an iced matcha espresso.
                </p>
              </div>
            </div>
            <Image src={UITagsStatic}></Image>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default About;
