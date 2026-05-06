import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import SplitText from "./SplitText";
import { ArchivoBlack, PoppinsFont, CormorantGaramond } from "@/public/fonts/fonts";


const Herosection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="h-full w-full overflow-hidden relative">
        <Image
          src="/images/hero-image.webp"
          alt="Hero Image"
          height={816}
          width={1456}
          loading="eager"
          className="object-cover h-full w-full object-center"
        />
        <header className="absolute inset-0 h-full w-full backdrop-brightness-50 flex flex-col">
          <h1
            className={`text-white text-5xl text-center mt-10 ${ArchivoBlack.className}`}
          >
            Minscape
          </h1>
          <p className="text-white text-center text-xs">Interiors</p>
          <div className="h-[50vh] flex flex-col justify-center items-center text-white p-5">
            <h2
              
            >
              {/* Transforming Spaces. Elevating Lives. */}
              <SplitText
                text="Transforming Spaces. 
                Elevating Lives."
                className={`${CormorantGaramond.className} text-5xl lg:text-8xl font-bold my-7 text-center h-35`}
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-90px"
                textAlign="center"
              />
            </h2>
            <p className={` ${PoppinsFont.className} text-md lg:text-lg text-center`}>
              Luxury interior design tailored to your personality and lifestyle.
            </p>
          </div>
          <div className="mt-20 w-full flex justify-center text-black">
            <button className="px-5 py-3 bg-[#ab7444] hover:bg-[#794f2e] transition duration-300 hover:cursor-pointer">
              View My Portfolio
            </button>
          </div>
          <div className="text-white flex justify-center mt-10">
            <BsChevronDown className="text-5xl" />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Herosection;
