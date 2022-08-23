import Carousel1 from "../../../../assets/carousel1.png";
import Carousel2 from "../../../../assets/carousel2.png";
import Carousel3 from "../../../../assets/carousel3.png";
import Carousel4 from "../../../../assets/carousel4.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { v4 as uuidv4 } from "uuid";

const Carousel = () => {
  const images = [Carousel1, Carousel2, Carousel3, Carousel4];

  const CarouselItems = images.map((image) => {
    return (
      <div className="mx-4">
        <Image src={image}></Image>
      </div>
    );
  });

  return (
    <Marquee speed={30} gradientColor={[248, 248, 248]} gradientWidth={100}>
      <div className="flex justify-around w-full">{CarouselItems}</div>
    </Marquee>
  );
};

export default Carousel;
