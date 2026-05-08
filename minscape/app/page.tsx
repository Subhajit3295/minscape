// import Image from "next/image";
import Aboutmesection from "@/components/Aboutmesection";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Projectgallerysection from "@/components/Projectgallerysection";

export default function Home() {
  return (
    <main className="">
      <Herosection/>
      <Aboutmesection/>
      <Projectgallerysection/>
      <Faqs/>
      <Footer/>
    </main>
  );
}
