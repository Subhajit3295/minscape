import React from "react";
import { ArchivoBlack, PoppinsFont } from "@/public/fonts/fonts";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`w-full p-5 lg:px-25 lg:py-10 ${PoppinsFont.className}`}>
      <div className="flex flex-col lg:flex-row gap-5 h-100 lg:h-30 mb-10">
        <div
          className="w-full h-full lg:flex lg:flex-col lg:items-center"
          id="business-name"
        >
          <h1 className={` text-5xl ${ArchivoBlack.className}`}>Minscape</h1>
          <p className="text-xs">Interior designiner and decorator</p>
        </div>
        <div className="w-full h-full flex flex-col gap-1" id="contacts">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Contact</h3>
          <p>+91 8609841827</p>
          <p>minscape@gmail.com</p>
        </div>
        <div
          className="w-full flex flex-col justify-between gap-1 h-full"
          id="social-media"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Social</h3>
          <div className="flex gap-3">
            <FaInstagram className="text-3xl hover:cursor-pointer" />
            <FaFacebookF className="text-3xl hover:cursor-pointer" />
            <FaLinkedinIn className="text-3xl hover:cursor-pointer" />
          </div>
        </div>
        <div
          className="w-full h-full flex items-center justify-center"
          id="click-me"
        >
          <a
            href=""
            className="bg-[#BFA07A] text-black transition duration-300 hover:bg-[#ab7444] hover:text-white "
          >
            <button className="py-3 px-5 text-xl hover:cursor-pointer">
              Let&apos;s Talk
            </button>
          </a>
        </div>
      </div>
      <hr className="mb-3" />
        <p className="text-center">&copy; {new Date().getFullYear()} Minscape. All rights reserved.</p>
        <p className="text-center my-3 text-xs text-gray-400">Designed and Developed by Subhajit</p>
    </footer>
  );
};

export default Footer;
