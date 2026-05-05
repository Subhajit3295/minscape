import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";




import {
  FjallaOne,
  MerriweatherFont,
  ArchivoBlack,
  PoppinsFont,
} from "@/public/fonts/fonts";

const Herosection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="h-full w-full rounded-bl-2xl rounded-br-2xl overflow-hidden relative">
        <Image
          src="/images/hero-image.webp"
          alt="Hero Image"
          height={816}
          width={1456}
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
              className={`${PoppinsFont.className} text-4xl my-7 text-center`}
            >
              Transforming Spaces. Elevating Lives.
            </h2>
            <p className="text-md text-center">
              Luxury interior design tailored to your personality and lifestyle.
            </p>
          </div>
          <div className="mt-20 w-full flex justify-center text-white">
            <button className="p-5 bg-[#ab7444]">View My Portfolio</button>
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
