import CountUp from "./CountUp";

import { CormorantGaramond, PoppinsFont } from "@/public/fonts/fonts";
const Aboutmesection = () => {
  return (
    <section className="h-fit bg=[#E8DFD8 p-5 flex flex-col gap-10 lg:flex-row">
      <div className="heading lg:w-1/2">
        <h2 className={`${CormorantGaramond.className} text-5xl text-center`}>
          About Me
        </h2>
        <p
          className={`${PoppinsFont.className} text-md lg:text-lg text-center mt-3`}
        >
          I am a passionate interior designer with a keen eye for detail and a
          commitment to creating spaces that inspire and delight.
        </p>
      </div>
      <div className="stats flex justify-between gap-5 lg:w-1/2">
        <div className={`flex flex-col ${PoppinsFont.className}`}>
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
        <div className={`flex flex-col ${PoppinsFont.className}`}>
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
