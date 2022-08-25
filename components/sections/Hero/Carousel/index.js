import Carousel1 from "../../../../assets/carousel1.svg";
import Carousel2 from "../../../../assets/carousel2.svg";
import Carousel3 from "../../../../assets/carousel3.svg";
import Carousel4 from "../../../../assets/carousel4.svg";
import Marquee from "react-fast-marquee";

import { v4 as uuidv4 } from "uuid";

const Carousel = () => {
  const images = [
    <Carousel1 key={uuidv4()} />,
    <Carousel2 key={uuidv4()} />,
    <Carousel3 key={uuidv4()} />,
    <Carousel4 key={uuidv4()} />,
  ];

  const CarouselItems = images.map((image) => {
    return (
      <div key={uuidv4()} className="mx-4">
        {image}
      </div>
    );
  });

  return (
    <Marquee speed={20} gradientColor={[248, 248, 248]} gradientWidth={100}>
      <div className="flex justify-around w-full">{CarouselItems}</div>
    </Marquee>
  );
};

export default Carousel;
