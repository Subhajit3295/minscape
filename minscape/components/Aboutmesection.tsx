// import Image from "next/image";
import CountUp from "./CountUp";

import { CormorantGaramond, RobotoFont } from "@/public/fonts/fonts";
const Aboutmesection = () => {
  return (
    <section className="h-fit bg-[#E8DFD8] p-5 lg:p-25 flex flex-col gap-10 lg:flex-row">
      <div className="heading lg:w-1/2 flex flex-col justify-center">
        <h2 className={`${CormorantGaramond.className} text-5xl lg:text-6xl text-center lg:text-left uppercase`}>
          About Me
        </h2>
        <p
          className={`${CormorantGaramond.className} text-md lg:text-2xl text-center lg:text-left mt-3`}
        >
          I am a passionate interior designer with a keen eye for detail and a
          commitment to creating spaces that inspire and delight.
        </p>
      </div>
      <div className="stats flex lg:flex-col justify-between md:justify-around lg:items-center lg:gap-10 gap-5 lg:w-1/2 relative">
      {/* <Image
      src={'/icons/arrow.svg'}
      alt=""
      height={80}
      width={80}
      className="absolute top-0 h-50 w-50 border-2 border-black"
      /> */}
      
        <div className={`flex flex-col ${RobotoFont.className} font-bold`}>
          <p className="text-7xl">

          <CountUp
            from={1}
            to={10}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-7xl"
            delay={0}
          />+
          </p>
          <p className={`${CormorantGaramond.className} text-4xl`}>Years</p>
        </div>
        <div className={`flex flex-col ${RobotoFont.className} font-bold`}>
          <p className="text-7xl">

          <CountUp
            from={1}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-7xl"
            delay={0}
          />+
          </p>
          <p className={`${CormorantGaramond.className} text-4xl`}>Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutmesection;
