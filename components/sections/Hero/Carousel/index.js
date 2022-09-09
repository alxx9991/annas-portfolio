import Carousel1 from "../../../../assets/carousel1.png";
import Carousel2 from "../../../../assets/carousel2.png";
import Carousel3 from "../../../../assets/carousel3.png";
import Carousel4 from "../../../../assets/carousel4.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { v4 as uuidv4 } from "uuid";

const Carousel = () => {
  const images = [
    <Image src={Carousel1} key={uuidv4()} height={202} width={202} />,
    <Image src={Carousel2} key={uuidv4()} height={202} width={202} />,
    <Image src={Carousel3} key={uuidv4()} height={202} width={202} />,
    <Image src={Carousel4} key={uuidv4()} height={202} width={202} />,
  ];

  const CarouselItems = images.map((image) => {
    return (
      <div key={uuidv4()} className="mx-4">
        {image}
      </div>
    );
  });

  return (
    <Marquee speed={20} gradientColor={[248, 248, 248]} gradientWidth={0}>
      <div className="flex justify-around w-full">{CarouselItems}</div>
    </Marquee>
  );
};

export default Carousel;
